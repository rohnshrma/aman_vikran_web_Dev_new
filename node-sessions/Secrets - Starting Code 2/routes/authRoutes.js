import { Router } from "express";
import {
  SHOW_LOGIN,
  LOGIN_USER,
  SHOW_REGISTER,
  REGISTER_USER,
} from "../controllers/authController.js";

const router = Router();
router.route("/login").get(SHOW_LOGIN).post(LOGIN_USER);
router.route("/register").get(SHOW_REGISTER).post(REGISTER_USER);

export default router;
