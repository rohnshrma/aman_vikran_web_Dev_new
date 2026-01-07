import { Router } from "express";
import {
  GET_TASKS,
  POST_TASK,
  DELETE_TASK,
  GET_TASK_EDIT,
  UPDATE_TASK,
} from "../controllers/taskControllers.js";

const router = Router();

router.route("/{:status}").get(GET_TASKS).post(POST_TASK);
router.route("/delete/:id").get(DELETE_TASK);
router.route("/edit/:id").get(GET_TASK_EDIT).post(UPDATE_TASK);

export default router;
