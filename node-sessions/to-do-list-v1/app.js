// Import the Express framework (used to build web servers in Node.js)
import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
// Import the v4 function from the uuid package
// uuid generates unique identifiers; v4 creates random UUIDs
import { v4 as uuidv4 } from "uuid";
import Task from "./models/task.js";
// Create an Express application instance
const app = express();

config();

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
      const tasks = await Task.find({});
      res.render("index", {
        items: tasks,
      });
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  })

  // Handle POST requests to "/"
  .post(async (req, res) => {
    try {
      const { title, status } = req.body;

      if (title.length < 3) {
        return res.redirect("/");
      }

      const newtask = new Task({
        title: title,
        status: status,
      });

      await newtask.save();

      res.redirect("/");
    } catch (err) {
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

    const task = await Task.findOne({ _id: deleteID });

    if (!task) {
      console.log("Task not found");
      return res.redirect("/");
    }

    await Task.findByIdAndDelete(deleteID);

    console.log("Deleted", task);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }

  // Redirect back to the homepage after deletion
});

/* -------------------- SERVER START -------------------- */

// Start the server and listen on the specified port
app.listen(PORT, () => console.log("Server started on port :", PORT));
