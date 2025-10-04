import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
import { adminOnly } from '../middleware/auth.js';

const router = Router();
router.get('/', adminOnly, getUsers);
router.get('/:id', adminOnly, getUserById);
router.post('/', adminOnly, createUser);
router.put('/:id', adminOnly, updateUser);
router.delete('/:id', adminOnly, deleteUser);
export default router;