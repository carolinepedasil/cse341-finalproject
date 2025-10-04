import Country from '../models/Country.js';
import { countrySchema } from '../validation/countryValidation.js';

export const getCountries = async (_req, res) => {
  try {
    const countries = await Country.find().sort({ name: 1 });
    res.json(countries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch countries' });
  }
};

export const getCountryByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const doc = await Country.findOne({ code: code.toUpperCase() });
    if (!doc) return res.status(404).json({ message: 'Country not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch country' });
  }
};

export const createCountry = async (req, res) => {
  try {
    const { error, value } = countrySchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const exists = await Country.findOne({ code: value.code });
    if (exists) return res.status(400).json({ message: 'Country code already exists' });

    const created = await Country.create(value);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create country' });
  }
};

export const updateCountry = async (req, res) => {
  try {
    const { code } = req.params;
    const { error, value } = countrySchema.validate({
      ...req.body,
      code: code.toUpperCase()
    });
    if (error) return res.status(400).json({ message: error.message });

    const updated = await Country.findOneAndUpdate(
      { code: code.toUpperCase() },
      value,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Country not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update country' });
  }
};

export const deleteCountry = async (req, res) => {
  try {
    const { code } = req.params;
    const removed = await Country.findOneAndDelete({ code: code.toUpperCase() });
    if (!removed) return res.status(404).json({ message: 'Country not found' });
    res.json({ message: 'Country deleted', code: removed.code });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete country' });
  }
};
