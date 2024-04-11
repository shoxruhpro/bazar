'use strict'
const router = require('express').Router()
const db = require('../db')
const authMiddleware = require('../middlewares/auth.middleware')
const Joi = require('joi')

const createSchema = Joi.object({
    product_id: Joi.number().integer().min(1).required(),
    tariff_id: Joi.number().integer().min(1).required()
})


router.route('/')
    .post(authMiddleware, async (req, res) => {
        try {
            await createSchema.validateAsync(req.body)

            const { rowCount } = await db.result('INSERT INTO tops (product_id, tariff_id) VALUES (${product_id}, ${tariff_id})', req.body)

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(500).json({ error: 'Unknown Error' })
        } catch (e) {
            res.status(e instanceof Joi.ValidationError ? 400 : 500)
            res.json({ error: e.message ?? 'Unknown Error' })
        }
    })


module.exports = router
