import Joi from 'joi'

const userSchema = Joi.object({
  id: Joi.number().integer().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(0).max(100).required(),
  mobileNo: Joi.number().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

export default userSchema
