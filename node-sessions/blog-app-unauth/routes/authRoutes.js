import express from "express";
import {
  SHOW_LOGIN,
  SHOW_REGISTER,
  REGISTER,
  LOGIN,
  LOGOUT,
  GOOGLE,
  GOOGLE_CALLBACK,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/register", SHOW_REGISTER);
router.post("/register", REGISTER);

router.get("/login", SHOW_LOGIN);
router.post("/login", LOGIN);

router.get("/logout", LOGOUT);

router.get("/google", GOOGLE);
router.get("/google/callback", GOOGLE_CALLBACK);

// // Logout (to be implemented by students)
// router.get('/logout', (req, res) => {
//   // TODO: Implement logout logic
//   res.send('Logout - to be implemented');
// });

export default router;
