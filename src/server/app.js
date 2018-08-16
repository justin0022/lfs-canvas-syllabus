const express = require('express')
const path = require('path')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/lfsyllabi/', express.static(path.join(__dirname, '../../output/syllabi/')))
app.use('/', routes)

app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app
