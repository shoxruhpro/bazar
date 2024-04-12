const db = require('../db')


module.exports = async (req, res, next) => {
    try {
        if (req.auth?.user_id)
            await db.result('UPDATE users SET last_visit = $1 WHERE user_id = $2', [new Date().toISOString(), req.auth.user_id])
    } catch (e) {
        console.log(e.message)
    } finally {
        next()
    }
}
