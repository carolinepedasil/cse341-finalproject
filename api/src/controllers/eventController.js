import Event from '../models/Event.js';
import { eventSchema } from '../validation/eventValidation.js';

export const getEvents = async (req, res) => {
  try {
    const { countryCode } = req.query;
    const filter = countryCode ? { countryCode: countryCode.toUpperCase() } : {};
    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Event.findById(id);
    if (!doc) return res.status(404).json({ message: 'Event not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch event' });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { error, value } = eventSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const created = await Event.create(value);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create event' });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = eventSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const updated = await Event.findByIdAndUpdate(id, value, { new: true });
    if (!updated) return res.status(404).json({ message: 'Event not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update event' });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Event.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted', id: removed._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete event' });
  }
};
