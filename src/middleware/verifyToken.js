import jwt from 'jsonwebtoken'
import { secretKey } from '../utils/mockData.js'
import createError from 'http-errors'

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    next(createError(403, 'Forbidden: No token provided'))
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      next(createError(401, 'Unauthorized: Failed to authenticate token'))
    }
    req.user = decoded
    next()
  })
}

export default verifyToken
