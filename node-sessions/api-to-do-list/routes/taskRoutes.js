import { Router } from "express";
import {
  GET_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
} from "../controllers/taskController.js";
const router = Router();

router.route("/").get(GET_TASKS).post(CREATE_TASKS);

router.route("/:id").put(UPDATE_TASK).delete(DELETE_TASK);

export default router;
