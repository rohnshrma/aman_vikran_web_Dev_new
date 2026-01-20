// TODO: Create authentication middleware here
// This file should contain:
// 1. isAuthenticated middleware - checks if user is logged in
// 2. isNotAuthenticated middleware - checks if user is NOT logged in

// See tasks.md for detailed instructions


const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
};

export default isAuthenticated;