import Joi from 'joi';

export const eventSchema = Joi.object({
  title: Joi.string().trim().min(2).required(),
  description: Joi.string().trim().allow('', null),
  countryCode: Joi.string().trim().uppercase().min(2).max(3).required(),
  location: Joi.string().trim().allow('', null),
  date: Joi.date().iso().required()
});