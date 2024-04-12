const { expressjwt } = require('express-jwt')


module.exports = [
    expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),
    (err, req, res, next) => {
        if (err) {
            res.status(err.status).json(err)
        } else {
            next()
        }
    }
]
