'use strict'
const pgp = require('../conf/pgp')

module.exports = pgp({
    host: "127.0.0.200",
    port: process.env.DB_PORT ?? 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    max: 30
})