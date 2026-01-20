import Task from "../models/task.js";

export const GET_TASKS = async (req, res) => {
  try {
    let tasks;

    tasks = await Task.find({});
    if (!tasks) {
      res.status(400).json({ data: null, message: "Failed to Get Tasks!" });
    }

    res.status(200).json({ data: tasks });
  } catch (err) {
    return res.status(500).json({ data: null, message: err });
  }
};
export const CREATE_TASKS = async (req, res) => {
  try {
    const { title, status } = req.body;

    if (!title)
      return res.status(400).json({ message: "Please Provide Title for Task" });

    let task;

    task = await Task.findOne({ title: title });
    if (task) {
      res.status(400).json({ data: null, message: "Task Already In List!" });
    }

    task = new Task({
      title,
      status: status,
    });

    await task.save();

    res.status(200).json({ data: task, message: "Task Added!" });
  } catch (err) {
    return res.status(500).json({ data: null, message: err });
  }
};
export const UPDATE_TASK = (req, res) => {
  res.send("UPDATE TASKS");
};
export const DELETE_TASK = (req, res) => {
  res.send("DELETE TASKS");
};
