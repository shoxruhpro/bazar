'use strict'
const router = require('express').Router()
const db = require('../db')
const authMiddleware = require('../middlewares/auth.middleware')


router.route('/')
    .post(authMiddleware, async (req, res) => {
        try {
            req.body.user_id = req.auth.user_id
            req.body.end_date = Date.now() / 1000
            const { rowCount } = await db.result('INSERT INTO top_products (end_date, product_id, user_id) VALUES (${end_date}, ${product_id}, ${user_id})', req.body)

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(500).json({ error: 'Unknown Error' })
        } catch (e) {
            res.status(500).json({ error: e.message ?? 'Unknown Error' })
        }
    })


module.exports = router
