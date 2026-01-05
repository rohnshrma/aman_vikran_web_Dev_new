// Import mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js
import mongoose from "mongoose";

// Define the schema (blueprint) for a Task document in MongoDB
const taskSchema = new mongoose.Schema({
  // 'title' field: must be a string, required, trimmed, at least 3 characters, and unique
  title: {
    type: String, // Data type is String
    required: true, // Field is mandatory
    trim: true, // Removes whitespace from both ends
    minlength: 3, // Minimum length of 3 characters
    unqiue: true, // Should be unique (note: typo, should be 'unique')
  },
  // 'status' field: must be a string, can only be 'pending' or 'completed', defaults to 'pending'
  status: {
    type: String, // Data type is String
    enum: ["pending", "completed"], // Allowed values
    default: "pending", // Default value
  },
});

// Create a model (collection) named 'task' using the schema defined above
const Task = mongoose.model("task", taskSchema);

// Export the Task model so it can be used in other files
export default Task;
