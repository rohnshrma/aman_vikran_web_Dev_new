// Authentication routes
// Responsible for URL structure and wiring routes to controller functions / Passport.

import { Router } from "express"; // Express Router to create modular route handlers
import passport from "passport"; // Used here for login with the local strategy
import {
  SHOW_LOGIN,
  SHOW_REGISTER,
  REGISTER_USER,
} from "../controllers/authController.js"; // Controller functions

// Create a new router object
const router = Router();

// /auth/login
// GET  -> show the login page
// POST -> run Passport's local strategy to authenticate the user
router
  .route("/login")
  .get(SHOW_LOGIN)
  .post(
    passport.authenticate("local", {
      // Where to send the user when login is successful
      successRedirect: "/secrets",
      // Where to send the user when login fails
      failureRedirect: "/auth/login",
    })
  );

// /auth/register
// GET  -> show the registration page
// POST -> call REGISTER_USER to create a new account
router.route("/register").get(SHOW_REGISTER).post(REGISTER_USER);

router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.route("/google/callback").get(
  passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/auth/login",
  })
);

// Export the router so app.js can mount it under /auth
export default router;
