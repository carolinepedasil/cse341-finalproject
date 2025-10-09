import Joi from 'joi';

export const countrySchema = Joi.object({
  code: Joi.string().trim().uppercase().min(2).max(3).required(),
  name: Joi.string().trim().min(2).required().allow(' ', null).regex(/^[a-zA-Z ]*$/),
  region: Joi.string().trim().allow('', null),
  capital: Joi.string().trim().allow('', null),
  language: Joi.string().trim().allow('', null).regex(/^[a-zA-Z]*$/),
  currency: Joi.string().trim().allow('', null).regex(/^[a-zA-Z]*$/)
});