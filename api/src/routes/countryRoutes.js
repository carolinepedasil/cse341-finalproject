import { Router } from 'express';
import { getCountries, getCountryByCode } from '../controllers/countryController.js';

const router = Router();
router.get('/', getCountries);
router.get('/:code', getCountryByCode);
export default router;