export const protect = (req, res, next) => {
  // Passport adds isAuthenticated() to the request object
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  // Not logged in – redirect to login page
  return res.redirect("/auth/login");
};

export default protect;

