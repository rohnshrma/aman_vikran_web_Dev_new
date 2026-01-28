import { Router } from "express";
import {
  GET_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
} from "../controllers/taskController.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

// All task routes are protected – user must be logged in
router.use(auth);

router.route("/").get(GET_TASKS).post(CREATE_TASKS);

router.route("/:id").put(UPDATE_TASK).delete(DELETE_TASK);

export default router;

