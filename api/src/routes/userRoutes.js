import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
import { adminOnly,
  isAuthenticated
} from '../middleware/auth.js';


const router = Router();

// This route will get all of the users if the current user is an admin
router.get('/', adminOnly, 
  isAuthenticated,
  getUsers
);

// This route will get only one user by their id if the current user is an admin
router.get('/:id', adminOnly,
  isAuthenticated,
  getUserById
);

// This route will create a new user if the current user is an admin
router.post('/', adminOnly,
  isAuthenticated,
  createUser
);

// This route will update an existing user by its id if the current user is an admin
router.put('/:id', adminOnly,
  isAuthenticated,
  updateUser
);

// This route will delete an existing user by its id if the current user is an admin
router.delete('/:id', adminOnly,
  isAuthenticated,
  deleteUser
);
export default router;