import Itinerary from '../models/Itinerary.js';
import { itinerarySchema } from '../validation/itineraryValidation.js';

export const getItineraries = async (req, res) => {
  try {
    const { userEmail } = req.query;
    const filter = userEmail ? { userEmail: userEmail.toLowerCase() } : {};
    const docs = await Itinerary.find(filter).sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch itineraries' });
  }
};

export const getItineraryById = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Itinerary.findById(id);
    if (!doc) return res.status(404).json({ message: 'Itinerary not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch itinerary' });
  }
};

export const createItinerary = async (req, res) => {
  try {
    const { error, value } = itinerarySchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const created = await Itinerary.create(value);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create itinerary' });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = itinerarySchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const updated = await Itinerary.findByIdAndUpdate(id, value, { new: true });
    if (!updated) return res.status(404).json({ message: 'Itinerary not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update itinerary' });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Itinerary.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ message: 'Itinerary not found' });
    res.json({ message: 'Itinerary deleted', id: removed._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete itinerary' });
  }
};
