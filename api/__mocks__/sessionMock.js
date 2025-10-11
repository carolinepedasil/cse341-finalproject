export const mockSessionMiddleware = (req, _res, next) => {
  req.session = { user: { id: 'mock-user', username: 'caroline' } };
  next();
};

export const mockAdminMiddleware = (req, _res, next) => {
  req.headers['x-admin'] = '1';
  next();
};
