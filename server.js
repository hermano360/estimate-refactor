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

app.post('/pdfTest', (req, res, next) => {
  console.log('why is this still being sent????')
  let today = new Date()
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let dateString = `${today.getDate()}-${monthNames[today.getMonth()]}-${today.getFullYear()}`

  var options = {
    format: 'Letter',
    'header': {
      'height': '1.5in',
      'contents': `
        <div>
          <div style='width:40% margin: 20 20 20 20 float: left position:relative'>
            <div style='font-size:20px font-weight: bold'>Pro Builders Express, Inc</div>
            <div style='font-style: italic font-size: 10px''>
            1840 W Whittier Blvd, La Habra, CA 90631
            <br/>
            Phone: 866-360-1526 Fax 310-456-8302
            <br/>
            Phone: 562-921-5001
            </div>
          </div>
          <div style='width:30% margin: 20 10 20 100 float: left position:relative'>
            <div style='float: right margin-left:20px'>
              <div style=''>${dateString}</div>
              <div style=''>{{page}} of {{pages}}</div>
            </div>
            <div style='float: right'>
              <div style='font-weight:bold'>Date:</div>
              <div style='font-weight:bold'>Page:</div>
            </div>
          </div>
          <div style='border-bottom: 1px solid black position:relative width:90% left:5%'>
          <div style='color:white'> Baller </div>
          </div>
        </div>
      `
    },
    base: 'file://' + __dirname + '/public/',
    'footer': {
      'height': '1.5in',
      'contents': {
        default: `
           <div>
             <div style='border-top: 1px solid black width:20%margin-left: 5%float:left margin-top:50px'>Customers Initials</div>
             <div style='border-top: 1px solid black width:20% margin-left: 30% float:left margin-top:50px'>Date</div>
           </div>`
      },
      'border': {
        'top': '2in',
        'right': '1in',
        'bottom': '2in',
        'left': '1.5in'
      }
    }
  }
  pdf.create(req.body.html, options).toFile(`./ProBuildersEstimate.pdf`, (err, doc) => {
    console.log(err, doc, 'idk')
    res.json(doc)
  })
}
)

app.post('/pdfEmail', (req, res, next) => {
  sendMail.sendEmail(req.body.dirPath, req.body.name, req.body.email, (message) => res.json(message))
})
app.use(express.static('public'))

app.listen(PORT, () => console.log('Express server is listening on ' + PORT))
