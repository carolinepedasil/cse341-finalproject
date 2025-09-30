import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/userController.js';
import { adminOnly } from '../middleware/auth.js';

const router = Router();
router.get('/', adminOnly, getUsers);
router.get('/:id', adminOnly, getUserById);
export default router;