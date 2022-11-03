const express = require('express')

const Router = express.Router()

Router.get('/', (req, res) => {
    res.send("Working")
})

Router.get('/post', (req, res) => {
    res.render("form")
})

module.exports = Router