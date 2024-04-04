'use strict'
const router = require('express').Router()
const db = require('../db')
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authMiddleware = require('../middlewares/auth.middleware')


const BOT_TOKEN = '6579262888:AAFM5TR5u5nGcdL5VER5eNFnFakGKWlc5VM'
const BOT_SECRET_TOKEN = 'Phx14iOvd2tG17O'
const { JWT_SECRET } = process.env


router.post('/telegram', async (req, res) => {
    const { message } = req.body

    if (req.get('x-telegram-bot-api-secret-token') !== BOT_SECRET_TOKEN) return res.sendStatus(400)

    try {
        if (message.text?.startsWith('/start')) {
            const { ok } = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: message.chat.id,
                    text: `Salom ${message.from.first_name} 👋\n` +
                        `bazart.uz'ning rasmiy botiga xush kelibsiz\n\n⬇️ Kontaktingizni yuboring (tugmani bosib)`,
                    parse_mode: "HTML",
                    reply_markup: {
                        resize_keyboard: true,
                        one_time_keyboard: true,
                        keyboard: [[
                            {
                                text: "Kontaktni yuborish",
                                request_contact: true
                            }
                        ]]
                    }
                })
            })

            res.sendStatus(ok ? 200 : 500)
        } else if (message.contact) {
            let { contact: { user_id, first_name, last_name, phone_number } } = message
            phone_number = phone_number.replace('+', '')
            const full_name = first_name + (last_name ? ' ' + last_name : '')
            const code = otpGenerator.generate(6, {
                lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false
            })

            const { rowCount } = await db.result(
                'INSERT INTO users (user_id, full_name, phone_number) VALUES ($1, $2, $3) ' +
                // 'ON CONFLICT (user_id) DO UPDATE SET full_name = $2, phone_number = $3 ;\n' +
                'INSERT INTO codes (code, user_id) VALUES ($4, $1);',
                [user_id, full_name, phone_number, code])

            if (!rowCount) return res.sendStatus(500)

            const { ok } = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: message.chat.id,
                    text: `🔑 Kodingiz:\n<code>${code}</code>`,
                    parse_mode: "HTML",
                    reply_markup: {
                        remove_keyboard: true
                    }
                })
            })

            res.sendStatus(ok ? 200 : 500)
        } else res.end()
    } catch (e) {
        res.status(500).json({ error: e.message || 'Unknown Error' })
        console.error(e)
    }
})


router.post('/code', async (req, res) => {
    const { code } = req.body

    try {
        if (!(code?.length === 6))
            return res.status(400).json({ error: 'Bad Request' })

        const found = await db.oneOrNone('DELETE FROM codes WHERE user_id IN (SELECT user_id FROM codes WHERE code = $1) RETURNING user_id', code)

        if (!found)
            return res.status(401).json({ error: 'Unauthorized' })

        res.json({ token: jwt.sign({ user_id: found.user_id, noPassword: true }, JWT_SECRET, { expiresIn: '1h', algorithm: 'HS256' }) })
    } catch (e) {
        res.status(500).json({ error: e.message || 'Unknown Error' })
    }
})


router.post('/password', authMiddleware, async (req, res) => {
    if (!req.body.password || !req.auth.noPassword)
        return res.status(400).json({ error: 'Bad Request' })

    try {
        const hash = await bcrypt.hash(req.body.password, 1)
        const { rowCount } = await db.result('UPDATE users SET user_password = $1 WHERE user_id = $2', [hash, req.auth.user_id])

        if (!rowCount)
            return res.status(401).json({ error: 'Unauthorized' })

        res.json({ token: jwt.sign({ user_id: req.auth.user_id }, JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' }) })
    } catch (e) {
        res.status(500).json({ error: e.message || 'Unknown Error' })
    }
})


router.post('/login', async (req, res) => {
    const { phone_number, password } = req.body

    if (!(phone_number?.length > 5 && password))
        return res.status(401).json({ error: 'Unauthorized' })

    try {
        const user = await db.oneOrNone('SELECT user_id, user_password FROM users WHERE phone_number = $1', phone_number)

        if (!user)
            return res.status(401).json({ error: 'Unauthorized' })

        const matched = await bcrypt.compare(password, user.user_password)

        if (!matched)
            return res.status(401).json({ error: 'Unauthorized' })

        res.json({ token: jwt.sign({ user_id: user.user_id }, JWT_SECRET, { expiresIn: '1w', algorithm: 'HS256' }) })
    } catch (e) {
        res.status(500).json({ error: e.message || 'Unknown Error' })
    }
})


module.exports = router
