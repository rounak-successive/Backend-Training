import express from 'express'
import data from './mockData.js'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', (req, res) => {
  res.json(data)
})

app.listen(3000)
