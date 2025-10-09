import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().trim().min(2).required().regex(/^[a-zA-Z ]*$/),
  email: Joi.string().email().lowercase().required(),
  role: Joi.string().valid('user', 'admin').default('user').regex(/^[a-zA-Z]*$/)
});