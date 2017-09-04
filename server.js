var express = require('express')
var bodyParser = require('body-parser')
var pdf = require('html-pdf')
var sendMail = require('./api/sendMail')
var wordDoc = require('./api/wordDoc')

// Create out app

var app = express()
const PORT = process.env.PORT || 3000

// making sure traffic is through http, if not converting to http because
// openWeatherMap doesn't work with https

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get('/modelNo/:modelNo', (req, res, next) => {
  products.getModelNo(req.params.modelNo, (docs) => {
    res.json(docs)
  })
})

app.get('/allProducts', (req, res, next) => {
  products.allProducts((docs) => {
    res.json(docs)
  })
})

app.post('/modelNos', (req, res, next) => {
  products.getModelNos(req.body.modelNos, (docs) => {
    res.json(docs)
  })
})

app.post('/wordTest', (req, res, next) => {
  console.log('generate word.')
  wordDoc.generateWord()
  res.json('server response')
})

app.post('/pdfEmail', (req, res, next) => {
  sendMail.sendEmail(req.body.dirPath, req.body.name, req.body.email, (message) => res.json(message))
})
app.use(express.static('public'))

app.listen(PORT, () => console.log('Express server is listening on ' + PORT))
