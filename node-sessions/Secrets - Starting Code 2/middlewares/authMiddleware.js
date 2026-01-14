// Authorization middleware
// Ensures that only authenticated users can access certain routes.

export const protect = (req, res, next) => {
  // Passport adds the isAuthenticated() helper to the request object.
  // It returns true if the user has logged in and the session is valid.
  if (req.isAuthenticated && req.isAuthenticated()) {
    // User is logged in; continue to the next middleware/route handler
    return next();
  }
  // User is not logged in – send them to the login page
  return res.redirect("/auth/login");
};

// Default export for convenience
export default protect;

