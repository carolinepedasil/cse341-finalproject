import Joi from 'joi';

export const eventSchema = Joi.object({
  title: Joi.string().trim().min(2).required().regex(/^[a-zA-Z0-9 ]*$/),
  description: Joi.string().trim().allow('', null).regex(/^[a-zA-Z0-9 ]*$/),
  countryCode: Joi.string().trim().uppercase().min(2).max(3).required().regex(/^[a-zA-Z]*$/),
  location: Joi.string().trim().allow('', null).regex(/^[a-zA-Z ]*$/),
  date: Joi.date().iso().required()
});