'use strict'
const router = require('express').Router()
const Joi = require('joi')
const db = require('../db')
const objToQuerySet = require('../utils/obj-to-query-set')
const isDigit = require('../utils/is-digit')
const authMiddleware = require('../middlewares/auth.middleware')


const createSchema = Joi.object({
    product_name: Joi.string().min(1).max(70).required(),
    info: Joi.string().max(160).allow(null).allow(''),
    product_description: Joi.string().max(9000).allow(null).allow(''),
    product_address: Joi.array().items(Joi.number().integer()).length(2).required(),
    brand: Joi.string().min(2).max(100).allow(null),
    price: Joi.number().integer().min(0).max(2_000_000_000).required(),
    old_price: Joi.number().integer().min(0).max(2_000_000_000).allow(null),
    phone_number: Joi.string().min(5).max(18).required(),
    email: Joi.string().min(9).max(255),
    variants: Joi.array().items(Joi.string().max(100)).max(10).allow(null),
    photos: Joi.array().items(Joi.string().min(17).max(255)).min(1).max(5).required(),
    category_id: Joi.number().integer().min(1).required(),
    user_id: Joi.number().integer().min(1).required()
})

const updateSchema = Joi.object({
    product_name: Joi.string().min(1).max(70),
    info: Joi.string().max(160).allow(null).allow(''),
    product_description: Joi.string().max(9000).allow(null).allow(''),
    product_address: Joi.array().items(Joi.number().integer()).length(2),
    brand: Joi.string().min(2).max(100),
    price: Joi.number().integer().min(0).max(2_000_000_000),
    old_price: Joi.number().integer().min(0).max(2_000_000_000),
    phone_number: Joi.string().min(5).max(18),
    email: Joi.string().min(9).max(255).allow(null),
    variants: Joi.array().items(Joi.string().max(100)).max(10),
    photos: Joi.array().items(Joi.string().min(17).max(255)).min(1).max(10),
    category_id: Joi.number().integer().min(1)
}).optional()


const filterSchema = Joi.object({
    search: Joi.string().min(1).max(255),
    address: Joi.array().items(Joi.number().integer()).length(2),
    from_price: Joi.number().integer().min(1).max(2_000_000_000),
    to_price: Joi.number().integer().min(1).max(2_000_000_000),
    category_id: Joi.number().integer().min(1)
}).optional()


router.route('/')
    .get(async (req, res) => {
        try {
            const where = []

            if (req.query.search) {
                req.query.search = `%${req.query.search}%`
                where.push('p.product_name ILIKE ${search}')
            }

            if (typeof req.query.address === 'string') {
                req.query.address = req.query.address.split(',').map(el => Number(el))
                where.push('product_address && ${address}')
            }

            if (req.query.from_price) {
                req.query.from_price = Number(req.query.from_price)
                where.push('p.price >= ${from_price}')
            }

            if (req.query.to_price) {
                req.query.to_price = Number(req.query.to_price)
                where.push('p.price <= ${to_price}')
            }

            if (req.query.category_id) {
                req.query.category_id = Number(req.query.category_id)
                where.push('p.category_id = ${category_id}')
            }

            await filterSchema.validateAsync(req.query)
            let filter = where.length ? ' WHERE ' + where.join(' AND ') : ''

            const products = await db.manyOrNone(
                'SELECT p.product_id, p.product_name, p.price, p.old_price, photos[1] AS photo, p.email, ' +
                "c.uz AS category_uz, c.ru AS category_ru, c.en AS category_en, " +
                "t.uz AS tariff_uz, t.ru AS tariff_ru, t.en AS tariff_en " +
                'FROM products AS p INNER JOIN categories c ON p.category_id = c.category_id ' +
                'LEFT JOIN tops ON p.product_id = tops.product_id ' +
                'LEFT JOIN tariffs t ON tops.tariff_id = t.tariff_id AND tops.verified_at IS NOT NULL ' +
                filter + ' ORDER BY t.tariff_id DESC', req.query)

            res.json(products)
        } catch (e) {
            const STATUS_CODE = (e instanceof Joi.ValidationError) ? 400 : 500
            res.status(STATUS_CODE).json({ error: e.message ?? 'Unknown Error' })
        }
    })
    .post(authMiddleware, async (req, res) => {
        try {
            req.body.user_id = req.auth.user_id
            await createSchema.validateAsync(req.body)
            const { rowCount } = await db.result('INSERT INTO products ' +
                '(product_name, product_description, info, product_address, brand, price, old_price, phone_number, variants, photos, category_id, user_id) VALUES ' +
                '(${product_name}, ${product_description}, ${info}, ${product_address}, ${brand}, ${price}, ${old_price}, ${phone_number}, ${variants}, ${photos}, ${category_id}, ${user_id})',
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


router.route('/:id')
    .get(async (req, res) => {
        if (!isDigit(req.params.id))
            return res.status(404).json({ error: 'Not Found' })

        try {
            const product = await db.oneOrNone(
                'SELECT product_id, product_name, info, product_description, product_address, brand, price, old_price, p.phone_number, p.email, variants, photos, full_name, p.user_id, u.photo, u.last_visit, p.category_id ' +
                'FROM products p INNER JOIN categories c ON p.category_id = c.category_id ' +
                'INNER JOIN users u ON p.user_id = u.user_id ' +
                'WHERE p.product_id = $1 LIMIT 1', req.params.id)

            if (!product)
                return res.status(404).json({ error: 'Not Found' })

            const similars = await db.manyOrNone('SELECT product_id, product_name, price, old_price, photos[1] AS photo FROM products WHERE category_id = $1 LIMIT 30',
                [product.category_id])
            res.json({ product, similars })
        } catch (e) {
            res.status(500).json({ error: e.message ?? 'Unknown Error' })
        }
    })
    .patch(authMiddleware, async (req, res) => {
        if (!isDigit(req.params.id))
            return res.status(404).json({ error: 'Not Found' })

        const [cols, size] = objToQuerySet(req.body)

        if (size === 0)
            return res.status(400).json({ error: 'Bad Request' })

        try {
            await updateSchema.validateAsync(req.body)

            const { rowCount } = await db.result(`UPDATE products SET ${cols} WHERE product_id = $${size + 1} AND user_id = $${size + 2}`,
                [
                    ...Object.values(req.body), req.params.id, req.auth.user_id
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
    .delete(authMiddleware, async (req, res) => {
        if (!isDigit(req.params.id))
            return res.status(404).json({ error: 'Not Found' })

        try {
            const { rowCount } = await db.result('DELETE FROM products WHERE product_id = $1 AND user_id = $2', [req.params.id, req.auth.user_id])

            if (rowCount === 1)
                res.status(200).json({ success: true })
            else
                res.status(404).json({ error: 'Not Found' })
        } catch (e) {
            res.status(500).json({ error: e.message ?? 'Unknown Error' })
        }
    })


router.post('/liked', async (req, res) => {
    try {
        await Joi.object({ ids: Joi.array().items(Joi.number().integer().min(1)).min(1) })
            .validateAsync(req.body)
        const products = await db.manyOrNone('SELECT product_id, product_name, price, old_price, photos[1] AS photo FROM products WHERE product_id IN ($1:csv)', [req.body.ids])
        res.json(products)
    } catch (e) {
        res.status(500).json({ error: e.message ?? 'Unknown Error' })
    }
})


module.exports = router
