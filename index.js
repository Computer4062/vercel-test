const express = require('express')
require('dotenv').config()

const product = require('./api/product')

const app = express()

app.use('/api/product', product)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(process.env.PORT || 3000)