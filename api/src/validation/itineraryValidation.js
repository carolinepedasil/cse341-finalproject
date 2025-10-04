import Joi from 'joi';

const itemSchema = Joi.object({
  day: Joi.number().integer().min(1).required(),
  note: Joi.string().allow('', null),
  countryCode: Joi.string().trim().uppercase().min(2).max(3).required(),
  date: Joi.date().iso().allow(null)
});

export const itinerarySchema = Joi.object({
  userEmail: Joi.string().email().lowercase().required(),
  title: Joi.string().trim().min(2).required(),
  items: Joi.array().items(itemSchema).default([])
});