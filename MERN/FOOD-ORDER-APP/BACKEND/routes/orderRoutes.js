import { Router } from "express";
import auth from "../middlewares/auth.js";

import {
  placeOrder,
  getMyOrders,
  getOrderById,
  cancelOrder,
} from "../controllers/orderController.js";

const router = Router();

router.use(auth);

router.post("/", placeOrder);
router.get("/", getMyOrders);
router.get("/:id", getOrderById);
router.put("/:id/cancel", cancelOrder);

export default router;
