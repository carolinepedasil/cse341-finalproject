import Itinerary from '../models/Itinerary.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getItineraries = asyncHandler(async (req, res) => {
  const { userEmail } = req.query;
  const filter = userEmail ? { userEmail: userEmail.toLowerCase() } : {};
  const docs = await Itinerary.find(filter).sort({ createdAt: -1 });
  res.json(docs);
});

export const getItineraryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const doc = await Itinerary.findById(id);
  if (!doc) return res.status(404).json({ message: 'Itinerary not found' });
  res.json(doc);
});