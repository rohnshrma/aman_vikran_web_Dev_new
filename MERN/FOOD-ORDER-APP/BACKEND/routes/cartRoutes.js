import { Router } from "express";
import auth from "../middlewares/auth.js";
import {
  addToCart,
  getCart,
  removeItem,
  clearCart,
} from "../controllers/cartController.js";

const router = Router();
router.use(auth);

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:foodId", removeItem);
router.delete("/", clearCart);

export default router;
