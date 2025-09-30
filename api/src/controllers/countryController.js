import Country from '../models/Country.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getCountries = asyncHandler(async (req, res) => {
  const countries = await Country.find().sort({ name: 1 });
  res.json(countries);
});

export const getCountryByCode = asyncHandler(async (req, res) => {
  const { code } = req.params;
  const doc = await Country.findOne({ code: code.toUpperCase() });
  if (!doc) return res.status(404).json({ message: 'Country not found' });
  res.json(doc);
});