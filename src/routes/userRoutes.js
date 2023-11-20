import express from 'express'
import users from '../utils/mockData.js'
import jwt from 'jsonwebtoken'

const router = express.Router()
const secretKey = 'my-secret-key'

router.get('/', (req, res) => {
  res.json(users)
})

router.use(express.json())
router.post('/', (req, res) => {
  users.push(req.body)
  res.json(users)
})

router.get('/login', (req, res) => {
  const { name } = req.body
  const user = users.find((u) => u.name === name)
  if (user) {
    const token = jwt.sign(
      { userId: user.id, name: user.name },
      secretKey,
      { expiresIn: '1h' }
    )
    res.json({ token })
  } else {
    res.status(401).json({ message: 'Invalid username' })
  }
})

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(403).json({ message: 'No token provided' })
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' })
    }
    req.user = decoded
    next()
  })
}

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected resource', user: req.user })
})

export default router
