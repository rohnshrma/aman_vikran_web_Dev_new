import Task from "../models/task.js";

export const GET_TASKS = async (req, res) => {
  try {
    console.log(req.params.status);
    let tasks;

    if (!req.params.status) {
      tasks = await Task.find({});
    } else {
      tasks =
        req.params.status === "completed"
          ? await Task.find({ status: "completed" })
          : await Task.find({ status: "pending" });
    }

    console.log(tasks);

    res.render("index", {
      items: tasks,
    });
  } catch (err) {
    // If an error occurs, log it and redirect to the homepage
    console.log(err);
    res.redirect("/");
  }
};

export const POST_TASK = async (req, res) => {
  try {
    // Destructure title and status from the request body
    const { title, status } = req.body;

    // If the title is too short, redirect without saving
    if (title.length < 3) {
      return res.redirect("/");
    }

    // Create a new Task document
    const newtask = new Task({
      title: title,
      status: status,
    });

    // Save the new task to the database
    await newtask.save();

    // Redirect to the homepage after saving
    res.redirect("/");
  } catch (err) {
    // If an error occurs, log it and redirect
    console.log(err);
    res.redirect("/");
  }
};

export const DELETE_TASK = async (req, res) => {
  try {
    // Extract the id from the URL parameter
    const deleteID = req.params.id;

    // Find the task by its ID
    const task = await Task.findOne({ _id: deleteID });

    // If the task does not exist, log and redirect
    if (!task) {
      console.log("Task not found");
      return res.redirect("/");
    }

    // Delete the task by its ID
    await Task.findByIdAndDelete(deleteID);

    // Log the deleted task and redirect
    console.log("Deleted", task);
    res.redirect("/");
  } catch (err) {
    // If an error occurs, log it and redirect
    console.log(err);
    res.redirect("/");
  }

  // Redirect back to the homepage after deletion
};

export const GET_TASK_EDIT = async (req, res) => {
  try {
    const id = req.params.id;

    let task = await Task.findOne({ _id: id });

    if (!task) {
      console.log("Task not found");
      return res.redirect("/");
    }

    res.render("edit", { task });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

export const UPDATE_TASK = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, status } = req.body;

    let task = await Task.findOne({ _id: id });

    if (!task) {
      console.log("Task not found");
      return res.redirect("/");
    }

    task.title = title;
    task.status = status;

    // Save the new task to the database
    await task.save();

    // Redirect to the homepage after saving
    res.redirect("/");
  } catch (err) {
    // If an error occurs, log it and redirect
    console.log(err);
    res.redirect("/");
  }
};
