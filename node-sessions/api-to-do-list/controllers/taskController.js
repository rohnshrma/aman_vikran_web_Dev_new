import Task from "../models/task.js";

export const GET_TASKS = async (req, res) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json({
      status: "success",
      data: tasks,
      message: "Tasks fetched successfully",
    });
  } catch (err) {
    console.error("GET_TASKS error:", err);
    return res
      .status(500)
      .json({ status: "fail", data: null, message: "Failed to get tasks" });
  }
};
export const CREATE_TASKS = async (req, res) => {
  try {
    const { title, status } = req.body;

    const userId = req.user._id;

    if (!title)
      return res.status(400).json({
        status: "fail",
        message: "Please Provide Title for Task",
      });

    // Check duplicate title for this specific user only
    const existingTask = await Task.findOne({ title, userId });
    if (existingTask) {
      return res.status(400).json({
        status: "fail",
        data: null,
        message: "Task already in your list with same title",
      });
    }

    const task = new Task({
      title,
      status: status || "pending",
      userId,
    });

    await task.save();

    return res.status(201).json({
      status: "success",
      data: task,
      message: "Task Added!",
    });
  } catch (err) {
    console.error("CREATE_TASKS error:", err);
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Failed to create task",
    });
  }
};
export const UPDATE_TASK = async (req, res) => {
  try {
    const id = req.params.id;

    const userId = req.user._id;

    const { title, status } = req.body;

    let task = await Task.findOne({ _id: id, userId });
    if (!task) {
      console.log("Task doesn't exists or don't belong to this used");
      return res.status(404).json({
        status: "fail",
        data: null,
        message: "Task not found or you dont have permission to update it",
      });
    }

    if (title) {
      const titleConflict = await Task.findOne({
        title,
        userId,
        _id: { $ne: id },
      });

      if (titleConflict) {
        return res.status(400).json({
          status: "fail",
          message: "Task already exist with same title",
        });
      }

      task.title = title;
    }

    if (status) {
      task.status = status;
    }

    await task.save();
    console.log("Task updated");

    return res.status(200).json({
      status: "success",
      data: task,
      message: `${task.title} updated`,
    });
  } catch (err) {
    console.error("UPDATE_TASK error:", err);
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Failed to update task",
    });
  }
};
export const DELETE_TASK = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user._id;

    const task = await Task.findOneAndDelete({ _id: id, userId });

    if (!task) {
      console.log("Task doesn't exists or don't belong to this user");
      return res.status(404).json({
        status: "fail",
        data: null,
        message: "Task not found or you dont have permission to delete it",
      });
    }

    return res.status(200).json({
      status: "success",
      data: null,
      message: "Task deleted successfully",
    });
  } catch (err) {
    console.error("DELETE_TASK error:", err);
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Failed to delete task",
    });
  }
};
