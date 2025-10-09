import { Router } from 'express';
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';

const router = Router();

// This route will get all of the events and will filter by a parameter of the country code
router.get('/', getEvents);

// This route will get a single event by its id
router.get('/:id', getEventById);

// This route will create a new event
router.post('/', createEvent);

// This route will update an existing event by its id
router.put('/:id', updateEvent);

// This route will delete an existing event by its id
router.delete('/:id', deleteEvent);
export default router;