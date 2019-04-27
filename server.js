const express = require('express')
const serveStatic = require('serve-static')
const path = require('path') 

const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', serveStatic(path, join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('listening to port ' + port)