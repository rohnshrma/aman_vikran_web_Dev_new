import express from "express";
import auth from "../middlewares/auth.js";
import {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
} from "../controllers/foodController.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", auth, createFood);
router.put("/:id", auth, updateFood);
router.delete("/:id", auth, deleteFood);

export default router;
