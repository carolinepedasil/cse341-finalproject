import { Router } from 'express';
import { getItineraries, getItineraryById } from '../controllers/itineraryController.js';

const router = Router();
router.get('/', getItineraries);
router.get('/:id', getItineraryById);
export default router;