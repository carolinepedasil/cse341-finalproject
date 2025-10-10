import { Router } from 'express';
import {
  getCountries,
  getCountryByCode,
  createCountry,
  updateCountry,
  deleteCountry
} from '../controllers/countryController.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = Router();
// This route will get all of the countries
router.get('/', 
  isAuthenticated,
  getCountries
);

// This route will get a single country based on its code (different from id!)
router.get('/:code', 
  isAuthenticated,
  getCountryByCode
);

// This route will create a new country
router.post('/', isAuthenticated,
  createCountry
);

// This route will update an existing country based on its code
router.put('/:code', isAuthenticated,
  updateCountry
);

// This route will delete an existing country based on its code
router.delete('/:code', isAuthenticated,
  deleteCountry
);
export default router;