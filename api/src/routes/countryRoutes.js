import { Router } from 'express';
import {
  getCountries,
  getCountryByCode,
  createCountry,
  updateCountry,
  deleteCountry
} from '../controllers/countryController.js';

const router = Router();
// This route will get all of the countries
router.get('/', getCountries);

// This route will get a single country based on its code (different from id!)
router.get('/:code', getCountryByCode);

// This route will create a new country
router.post('/', createCountry);

// This route will update an existing country based on its code
router.put('/:code', updateCountry);

// This route will delete an existing country based on its code
router.delete('/:code', deleteCountry);
export default router;