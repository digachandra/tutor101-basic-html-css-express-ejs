const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      ejs = require('ejs'),
      expressLayouts = require('express-ejs-layouts')

var app = express()
var port = process.env.PORT || 9000

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes'))

app.listen(port)
console.log(`Live on port ${port}`)
