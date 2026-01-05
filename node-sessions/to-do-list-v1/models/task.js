// blueprint || SCHEMA

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unqiue: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

// model || collection
const Task = mongoose.model("task", taskSchema);

export default Task;
