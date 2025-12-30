// Import the Express framework (used to build web servers in Node.js)
import express from "express";

// Import the v4 function from the uuid package
// uuid generates unique identifiers; v4 creates random UUIDs
import { v4 as uuidv4 } from "uuid";

// Create an Express application instance
const app = express();

// Define the port number where the server will run
const PORT = 3000;

// In-memory array to store items (acts as a temporary database)
// NOTE: Data will reset when the server restarts
let items = [];

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
  .get((req, res) => {
    // Render the "index.ejs" view
    // Pass the items array to the template
    res.render("index", {
      items: items,
    });
  })

  // Handle POST requests to "/"
  .post((req, res) => {
    // Validate input:
    // If title length is less than 3 characters, reject it
    if (req.body.title.length < 3) {
      return res.redirect("/");
    }

    // Add a new item to the items array
    // Spread operator copies form data (e.g., title)
    // uuidv4() generates a unique id for each item
    items.push({ ...req.body, id: uuidv4() });

    // Log the updated items array to the console
    console.log(items);

    // Redirect back to the homepage after adding the item
    res.redirect("/");
  });

/* -------------------- DELETE ROUTE -------------------- */

// Handle item deletion using a dynamic route parameter (:id)
app.route("/delete/:id").get((req, res) => {
  // Extract the id from the URL parameter
  const deleteID = req.params.id;

  // Filter out the item with the matching id
  // This creates a new array without the deleted item
  items = items.filter((item) => item.id !== deleteID);

  // Redirect back to the homepage after deletion
  res.redirect("/");
});

/* -------------------- SERVER START -------------------- */

// Start the server and listen on the specified port
app.listen(PORT, () => console.log("Server started on port :", PORT));
