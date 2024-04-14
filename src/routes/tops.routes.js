'use strict'
const router = require('express').Router()
const db = require('../db')
const authMiddleware = require('../middlewares/auth.middleware')
const Joi = require('joi')

const createSchema = Joi.object({
    product_id: Joi.number().integer().min(1).required(),
    tariff_id: Joi.number().integer().min(1).required(),
    card: Joi.string().pattern(/^\d\d\d\d$/).default(null)
})


router.route('/')
    .post(authMiddleware, async (req, res) => {
        try {
            const newTop = await createSchema.validateAsync(req.body)

            const { rowCount } = await db.result('INSERT INTO tops (product_id, tariff_id, card) VALUES (${product_id}, ${tariff_id}, ${card})', newTop)

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(500).json({ error: 'Unknown Error' })
        } catch (e) {
            res.status(e instanceof Joi.ValidationError ? 400 : 500)
            res.json({ error: e.message ?? 'Unknown Error' })
        }
    })
    .get(async (req, res) => {
        try {
            const tops = await db.manyOrNone('SELECT * FROM tops INNER JOIN products WHERE tops.product_id = products.product_id AND tops.verified_at IS NOT NULL')
            res.json(tops)
        } catch (e) {
            res.status(500).json({ error: e.message ?? 'Unkown Error' })
        }
    })


module.exports = router
