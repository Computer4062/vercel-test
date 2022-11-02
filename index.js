const express = require('express')
require('dotenv').config()

const product = require('./routes/product')

const app = express()

app.use('/products', product)

app.set('view engine', 'ejs')

app.get('/products', (req, res) => {
    res.send(' ')
})


app.listen(process.env.PORT || 3000)