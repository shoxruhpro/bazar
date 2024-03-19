const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bazar')
})

app.listen(8080, () => {
    console.log('http://localhost:8080')
})
