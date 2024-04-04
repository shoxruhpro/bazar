'use strict'
const pgp = require('../conf/pgp')

module.exports = pgp({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    max: 30
})