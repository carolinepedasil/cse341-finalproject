import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getUsers = asyncHandler(async (_req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  const doc = await User.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: 'User not found' });
  res.json(doc);
});