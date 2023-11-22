import express from 'express'
import data from './utils/mockData.js'
import userRoutes from './routes/index.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'
import createError from 'http-errors'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', (req, res) => {
  res.json(data)
})

app.use('/api', userRoutes)

app.use((req, res, next) => {
  next(createError(404, 'Not Found'))
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
