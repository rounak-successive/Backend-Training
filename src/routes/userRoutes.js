import express from 'express'
import users from '../utils/mockData.js'
import verifyToken from '../middleware/verifyToken.js'
import {
  AddUserController,
  LoginController,
} from '../controllers/UserController.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(users)
})

router.use(express.json())

router.post('/', AddUserController)

router.get('/login', LoginController)

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected resource', user: req.user })
})

export default router
