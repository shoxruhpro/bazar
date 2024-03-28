'use strict'
const pgp = require('../conf/pgp')
module.exports = pgp(
    (process.env.NODE_ENV === 'production') ?
        'postgres://bazar:kSpZrdAu8W9YBDKyAMGQh75U48L2qwHK@dpg-cnsrmlv79t8c73a85mcg-a/bazar_y558' :
        'postgres://bazar:kSpZrdAu8W9YBDKyAMGQh75U48L2qwHK@dpg-cnsrmlv79t8c73a85mcg-a.frankfurt-postgres.render.com/bazar_y558?ssl=true')