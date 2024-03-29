'use strict'
const router = require('express').Router()
const db = require('../db')
const isDigit = require('../utils/is-digit')
const objToQuerySet = require('../utils/obj-to-query-set')
const Joi = require('joi')


const createSchema = Joi.object({
    uz: Joi.string().min(2).max(26),
    ru: Joi.string().min(2).max(26),
    en: Joi.string().min(2).max(26),
    category_id: Joi.number().min(1)
}).required()

const updateSchema = Joi.object({
    uz: Joi.string().min(2).max(26),
    ru: Joi.string().min(2).max(26),
    en: Joi.string().min(2).max(26),
    category_id: Joi.number().min(1)
}).optional()


router.route('/')
    .get(async (req, res) => {
        try {
            if (!isDigit(req.query?.category_id))
                return res.status(400).json({ error: 'Bad Request' })

            const categories = await db.manyOrNone('SELECT * FROM subcategories WHERE category_id = $1', req.query.category_id)
            res.json(categories)
        } catch (e) {
            res.status(500).json({ error: e?.message || 'Unknown Error' })
        }
    })
    .post(async (req, res) => {

        try {
            await createSchema.validateAsync(req.body)
            const { rowCount } = await db.result('INSERT INTO subcategories (uz, ru, en, category_id) VALUES (${uz}, ${ru}, ${en}, ${category_id})', req.body)

            if (rowCount === 1)
                res.status(201).json({ success: true })
            else
                res.status(500).json({ error: 'Unknown Error' })
        } catch (e) {
            const STATUS_CODE = (e instanceof Joi.ValidationError) ? 400 : 500
            res.status(STATUS_CODE).json({ error: e.message || 'Unknown Error' })
        }
    })


router.route('/:id')
    .get(async (req, res) => {
        if (!isDigit(req.params.id))
            return res.status(404).json({ error: 'Not Found' })

        try {
            const subcategory = await db.oneOrNone('SELECT * FROM subcategories WHERE id = $1', req.params.id)
            res.json(subcategory)
        } catch (e) {
            res.status(500).json({ error: e?.message || 'Unknown Error' })
        }
    })
    .patch(async (req, res) => {
        if (!isDigit(req.params.id))
            return res.status(404).json({ error: 'Not Found' })

        try {
            await updateSchema.validateAsync(req.body)
            const [cols, size] = objToQuerySet(req.body)

            if (size === 0)
                return res.status(400).json({ error: 'Bad Request' })

            const { rowCount } = await db.result(`UPDATE subcategories SET ${cols} WHERE id = $${size + 1}`,
                [
                    ...Object.values(req.body), req.params.id
                ])

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(404).json({ error: 'Not Found' })
        } catch (e) {
            const STATUS_CODE = (e instanceof Joi.ValidationError) ? 400 : 500
            res.status(STATUS_CODE).json({ error: e.message || 'Unknown Error' })
        }
    })
    .delete(async (req, res) => {
        if (!isDigit(req.params.id))
            return res.status(404).json({ error: 'Not Found' })

        try {
            const { rowCount } = await db.result('DELETE FROM subcategories WHERE id = $1', req.params.id)

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(404).json({ error: 'Not Found' })
        } catch (e) {
            res.status(500).json({ error: e?.message || 'Unknown Error' })
        }
    })


module.exports = router
