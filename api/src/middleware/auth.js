export const adminOnly = (req, res, next) => {
  const isAdmin = req.query.admin === '1' || req.headers['x-admin'] === '1';
  if (!isAdmin) return res.status(403).json({ message: 'Admin only' });
  next();
};

export const isAuthenticated = (req, res, next) => {
  if (req.session.user === undefined) {
      return res.status(401).json("You do not have access.");
  }
  next();
}