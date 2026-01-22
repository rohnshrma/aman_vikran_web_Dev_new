import { Router } from "express";
import { REGISTER, LOGIN } from "../controllers/userController.js";
const router = Router();

router.post("/register", REGISTER);
router.post("/login", LOGIN);

export default router;
