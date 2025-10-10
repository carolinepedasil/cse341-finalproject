import { Router } from 'express';
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = Router();

// This route will get all of the events and will filter by a parameter of the country code
router.get('/', isAuthenticated,
  getEvents
);

// This route will get a single event by its id
router.get('/:id', isAuthenticated,
  getEventById
);

// This route will create a new event
router.post('/', isAuthenticated,
  createEvent
);

// This route will update an existing event by its id
router.put('/:id', isAuthenticated,
  updateEvent
);

// This route will delete an existing event by its id
router.delete('/:id', isAuthenticated,
  deleteEvent
);
export default router;