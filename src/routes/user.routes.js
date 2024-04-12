'use strict'
const router = require('express').Router()
const db = require('../db')
const bcrypt = require('bcryptjs')
const authMiddleware = require('../middlewares/auth.middleware')
const Joi = require('joi')
const objToQuerySet = require('../utils/obj-to-query-set')


const updateSchema = Joi.object({
    full_name: Joi.string().min(2).max(30),
    user_address: Joi.string().min(3).max(255),
    email: Joi.string().min(4).max(255).allow(null),
    photo: Joi.string().min(17).max(255).allow(null),
    password: Joi.string().min(1).max(255),
    new_password: Joi.string().min(1).max(255)
}).optional()


router.route('/')
    .get(...authMiddleware, async (req, res) => {
        try {
            const user = await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', req.auth.user_id)

            if (!user)
                return res.status(404).json({ error: 'Not Found' })

            delete user.user_password
            res.json(user)
        } catch (e) {
            res.status(500).json({ error: e.message ?? 'Unknown Error' })
        }
    })
    .patch(authMiddleware, async (req, res) => {
        try {
            await updateSchema.validateAsync(req.body)
            const { new_password, password } = req.body
            delete req.body.new_password
            delete req.body.password

            if (new_password && !password)
                return res.status(400).json({ eror: 'Bad Request' })

            const user = await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', req.auth.user_id)

            if (!user)
                return res.status(404).json({ error: 'Not Found' })

            if (new_password && password) {
                const matched = await bcrypt.compare(password, user.user_password)

                if (matched)
                    req.body.user_password = await bcrypt.hash(new_password, 1)
            }

            const [cols, size] = objToQuerySet(req.body)
            if (size === 0)
                return res.status(400).json({ error: 'Bad Request' })

            const { rowCount } = await db.result(`UPDATE users SET ${cols} WHERE user_id = $${size + 1}`,
                [
                    ...Object.values(req.body), req.auth.user_id
                ])

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(404).json({ error: 'Not Found' })
        } catch (e) {
            res.status(e instanceof Joi.ValidationError ? 400 : 500)
            res.json({ error: e.message ?? 'Unknown Error' })
        }
    })


router.get('/products', authMiddleware, async (req, res) => {
    try {
        const products = await db.manyOrNone(
            'SELECT product_id, p.product_name, p.price, p.photos[1] AS photo, ' +
            "c.uz AS category_uz, c.ru AS category_ru, c.en AS category_en, " +
            "s.uz AS subcategory_uz, c.ru AS subcategory_ru, c.en AS subcategory_en " +
            'FROM products AS p ' +
            'INNER JOIN subcategories s ON p.subcategory_id = s.subcategory_id ' +
            'INNER JOIN categories c ON s.category_id = c.category_id ' +
            'WHERE p.user_id = $1',
            req.auth.user_id)

        res.json(products)
    } catch (e) {
        res.status(500).json({ error: e.message || 'Unknown Error' })
        console.log(e)
    }
})


module.exports = router
