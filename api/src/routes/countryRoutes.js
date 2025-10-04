import { Router } from 'express';
import {
  getCountries,
  getCountryByCode,
  createCountry,
  updateCountry,
  deleteCountry
} from '../controllers/countryController.js';

const router = Router();
router.get('/', getCountries);
router.get('/:code', getCountryByCode);
router.post('/', createCountry);
router.put('/:code', updateCountry);
router.delete('/:code', deleteCountry);
export default router;