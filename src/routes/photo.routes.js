'use strict'
const router = require('express').Router()
const multer = require('multer')
const db = require('../db')
const { unlink } = require('fs/promises')
const path = require('path')
const authMiddleware = require('../middlewares/auth.middleware')


const upload = multer({
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            cb(null, Date.now() + '.' + file.originalname.split('.').reverse()[0])
        },
        destination: (req, file, cb) => {
            cb(null, 'uploads/')
        }
    }),
    fileFilter: (req, file, cb) => {
        cb(null, file.mimetype.startsWith('image'))
    }
})


router.post('/', authMiddleware, upload.single('photo'), async (req, res) => {
    if (!req.file)
        return res.status(400).json({ error: 'Bad Request' })

    try {
        const photo = await db.one('INSERT INTO photos (file_name) VALUES ($1) RETURNING *', req.file.filename)
        res.json(photo)
    } catch (e) {
        res.status(500).json({ error: e.message || 'Unknown Error' })
    }
})


router.delete('/:file_name', authMiddleware, async (req, res) => {
    if (!/\d+\.\w+/.test(req.params.file_name))
        return res.status(404).json({ error: 'Not Found' })

    try {
        await unlink(path.join(__dirname, '../../uploads/') + req.params.file_name)
        const { rowCount } = await db.result('DELETE FROM photos WHERE file_name = $1', req.params.file_name)

        if (rowCount === 1) {
            res.status(200).json({ success: true })
        } else {
            res.status(500).json({ error: 'Unknown Error' })
        }
    } catch (e) {
        res.status(e.syscall === 'unlink' ? 404 : 500)
        res.json({ error: e.message || 'Unknown Error' })
    }
})


module.exports = router
