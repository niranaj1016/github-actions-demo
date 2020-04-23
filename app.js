var express = require('express')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('Hello World')
})

module.exports = app;