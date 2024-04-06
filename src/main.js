'use strict'
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const categryRoutes = require('./routes/category.routes')
const subcategoryRoutes = require('./routes/subcategory.routes')
const authRoutes = require('./routes/auth.routes')
const photoRoutes = require('./routes/photo.routes')
const productRoutes = require('./routes/product.routes')
const userRoutes = require('./routes/user.routes')
// const topsRouter = require('./routes/tops.routes')
const tariffRouter = require('./routes/tariff.routes')
const cors = require('cors')
// const helmet = require('helmet')

const PORT = 3000


app.use(morgan(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev'))
app.use(cors())

app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/v1/categories', categryRoutes)
app.use('/v1/subcategories', subcategoryRoutes)
app.use('/v1/products', productRoutes)
app.use('/v1/auth', authRoutes)
app.use('/v1/photo', photoRoutes)
app.use('/v1/user', userRoutes)
app.use('/v1/tariffs', tariffRouter)
// app.use('/v1/tops', topsRouter)
app.get('/', async (req, res) => res.redirect('https://bazart.uz/'))
app.use(async (req, res) => res.status(404).json({ error: 'Not Found' }));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
