// Import the Express framework (used to build web servers in Node.js)
import express from "express";
// Import dotenv to load environment variables from a .env file
import { config } from "dotenv";
// Import the database connection function
import connectDB from "./config/db.js";
// Import the v4 function from the uuid package for generating unique IDs
import { v4 as uuidv4 } from "uuid";
// Import the Task model (MongoDB collection)
import Task from "./models/task.js";
// Create an Express application instance
const app = express();

// Load environment variables from .env file
config();

// Connect to the MongoDB database
connectDB();

// Define the port number where the server will run
const PORT = 3000;

/* -------------------- MIDDLEWARES -------------------- */

// Serve static files (CSS, images, JS) from the "public" folder
// Example: public/style.css → accessible directly by the browser
app.use(express.static("public"));

// Parse incoming form data (application/x-www-form-urlencoded)
// extended: true allows nested objects in form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
// This allows rendering .ejs template files
app.set("view engine", "ejs");

/* -------------------- ROUTES -------------------- */

// Define route handling for "/"
// app.route() allows chaining multiple HTTP methods on the same route
app
  .route("/")
  // Handle GET requests to "/"
  .get(async (req, res) => {
    try {
      // Fetch all tasks from the database
      const tasks = await Task.find({});
      // Render the index.ejs template, passing the tasks as 'items'
      res.render("index", {
        items: tasks,
      });
    } catch (err) {
      // If an error occurs, log it and redirect to the homepage
      console.log(err);
      res.redirect("/");
    }
  })

  // Handle POST requests to "/"
  .post(async (req, res) => {
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
  });

/* -------------------- DELETE ROUTE -------------------- */

// Handle item deletion using a dynamic route parameter (:id)
app.route("/delete/:id").get(async (req, res) => {
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
});

/* -------------------- SERVER START -------------------- */

// Start the server and listen on the specified port
app.listen(PORT, () => console.log("Server started on port :", PORT));
