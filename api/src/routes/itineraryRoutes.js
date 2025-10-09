import { Router } from 'express';
import {
  getItineraries,
  getItineraryById,
  createItinerary,
  updateItinerary,
  deleteItinerary
} from '../controllers/itineraryController.js';

const router = Router();

// This route will get all of the itineraries
router.get('/', getItineraries);

// This route will get all of the itineraries by its id
router.get('/:id', getItineraryById);

// This route will create a new itinerary
router.post('/', createItinerary);

// This route will update an existing itinerary
router.put('/:id', updateItinerary);

// This route will delete an existing itinerary by its id
router.delete('/:id', deleteItinerary);
export default router;