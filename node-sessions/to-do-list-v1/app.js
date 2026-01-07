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

import taskRoutes from "./routes/taskRoutes.js";

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

app.use(taskRoutes);

/* -------------------- SERVER START -------------------- */

// Start the server and listen on the specified port
app.listen(PORT, () => console.log("Server started on port :", PORT));
