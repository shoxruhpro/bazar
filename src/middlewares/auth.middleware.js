const { expressjwt } = require('express-jwt')
const db = require('../db')


module.exports = [
    expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),
    async (err, req, res, next) => {
        if (err)
            res.status(err.status).json(err)
        else {
            const result = await db.result('UPDATE users SET last_login = $1 WHERE user_id = $2', [Date.now() / 1000, req.auth.user_id])
            console.log(result)
            next()
        }
    }
]
