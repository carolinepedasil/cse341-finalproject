export const adminOnly = (req, res, next) => {
  const isAdmin = req.query.admin === '1' || req.headers['x-admin'] === '1';
  if (!isAdmin) return res.status(403).json({ message: 'Admin only' });
  next();
};