var express = require('express')
var bodyParser = require('body-parser')
var sendMail = require('./api/sendMail')
var wordDoc = require('./api/wordDoc')
const path = require('path')

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

app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.post('/generateDocument', function (req, res) {
  wordDoc.generateWord(req.body.total, req.body.quoteInformation, (response) => {
    res.send(response)
  })
})

app.get('/downloadWordDocument', function (req, res) {
  res.download(path.join(__dirname, '/api/ProBuildersEstimate.docx'), 'ProBuildersEstimate.docx')
})

app.post('/pdfEmail', (req, res, next) => {
  sendMail.sendEmail(req.body.dirPath, req.body.name, req.body.email, (message) => res.json(message))
})

app.listen(PORT, () => console.log('Express server is listening on ' + PORT))
