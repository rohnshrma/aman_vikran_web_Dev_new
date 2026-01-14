import { Router } from "express";
import passport from "passport";
import { SHOW_LOGIN, SHOW_REGISTER, REGISTER_USER } from "../controllers/authController.js";

const router = Router();

// Show login form & handle login with Passport Local strategy
router
  .route("/login")
  .get(SHOW_LOGIN)
  .post(
    passport.authenticate("local", {
      successRedirect: "/secrets",
      failureRedirect: "/auth/login",
    })
  );

// Registration routes
router.route("/register").get(SHOW_REGISTER).post(REGISTER_USER);

export default router;

