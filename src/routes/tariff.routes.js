'use strict'
const router = require('express').Router()
const db = require('../db')
const Joi = require('joi')


const createTariffSchema = Joi.object({
    uz: Joi.string().min(1).max(70).required(),
    ru: Joi.string().min(1).max(70).required(),
    en: Joi.string().min(1).max(70).required(),
    price: Joi.number().integer().min(0).max(8_000_000).required(),
    old_price: Joi.number().integer().min(0).max(200_000).allow(null),
    link: Joi.string().min(24).max(255).allow(null),
    days: Joi.number().integer().min(0).max(366)
})


router.route('/')
    .get(async (req, res) => {
        try {
            const tariffs = await db.manyOrNone('SELECT * FROM tariffs')
            res.json(tariffs)
        } catch (e) {
            res.status(500).json({ error: e.message ?? 'Unkown Error' })
        }
    })
    .post(async (req, res) => {
        try {
            await createTariffSchema.validateAsync(req.body)
            const { rowCount } = await db.result(
                'INSERT INTO tariffs (uz, ru, en, price, old_price, link, days) VALUES (${uz}, ${ru}, ${en}, ${price}, ${old_price}, ${link}, ${days})',
                req.body)

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
