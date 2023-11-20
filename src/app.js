import express from 'express'
import data from './utils/mockData.js'
import userRoutes from './routes/index.js'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', (req, res) => {
  res.json(data)
})

app.use('/api', userRoutes)

app.listen(3000)
