const express = require('express')
require('dotenv').config()

const product = require('./routes/product')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home_page')
})

app.use('/products', product)


app.listen(process.env.PORT || 3000)