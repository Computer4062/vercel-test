const express = require('express')
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/test', (req, res) => {
    res.render('js-test')
})

app.listen(process.env.PORT || 3000)