import { Router } from 'express';
import {
  getItineraries,
  getItineraryById,
  createItinerary,
  updateItinerary,
  deleteItinerary
} from '../controllers/itineraryController.js';
import { isAuthenticated } from '../middleware/auth.js'

const router = Router();

// This route will get all of the itineraries
router.get('/', isAuthenticated,
  getItineraries
);

// This route will get all of the itineraries by its id
router.get('/:id', isAuthenticated,
  getItineraryById
);

// This route will create a new itinerary
router.post('/', isAuthenticated,
  createItinerary
);

// This route will update an existing itinerary
router.put('/:id', isAuthenticated,
  updateItinerary
);

// This route will delete an existing itinerary by its id
router.delete('/:id', isAuthenticated,
  deleteItinerary
);
export default router;