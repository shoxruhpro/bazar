'use strict'
const express = require('express')
const morgan = require('morgan')
const app = express()
const categryRoutes = require('./routes/category.routes')
const subcategoryRoutes = require('./routes/subcategory.routes')
const authRoutes = require('./routes/auth.routes')
const photoRoutes = require('./routes/photo.routes')
const productRoutes = require('./routes/product.routes')

const PORT = 3000

app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use(morgan(process.env.NODE_ENV === 'PRODUCTION' ? 'tiny' : 'dev'))
app.use('/api/v1/categories', categryRoutes)
app.use('/api/v1/subcategories', subcategoryRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/photo', photoRoutes)

app.get('/', async (req, res) => {
  res.redirect('https://bazart.uz/')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
