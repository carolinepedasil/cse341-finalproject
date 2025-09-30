import Event from '../models/Event.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getEvents = asyncHandler(async (req, res) => {
  const { countryCode } = req.query;
  const filter = countryCode ? { countryCode: countryCode.toUpperCase() } : {};
  const events = await Event.find(filter).sort({ date: 1 });
  res.json(events);
});

export const getEventById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const doc = await Event.findById(id);
  if (!doc) return res.status(404).json({ message: 'Event not found' });
  res.json(doc);
});