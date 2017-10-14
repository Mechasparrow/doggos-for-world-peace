const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})

app.use(express.static('frontend'))