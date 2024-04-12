const { expressjwt } = require('express-jwt')
const db = require('../db')


module.exports = [
    expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),
    (err, req, res, next) => {
        console.log('test!')
        if (err) {
            res.status(err.status).json(err)
        } else {
            db.result('UPDATE users SET last_visit = $1 WHERE user_id = $2', [new Date().toISOString(), req.auth.user_id])
                .then(result => {
                    console.log(result)
                    next()
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
]
