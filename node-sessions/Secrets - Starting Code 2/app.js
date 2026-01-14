// Main Express application file
// Sets up: environment config, database connection, sessions, Passport, routes and protected pages.

import express from "express"; // Core Express framework
import mongoose from "mongoose"; // Used by connectDB (not directly here, but kept for completeness)
import { config } from "dotenv"; // Loads variables from .env into process.env
import session from "express-session"; // Session middleware to store user sessions in memory (or a store)
import passport from "passport"; // Authentication library

// Local modules
import connectDB from "./config/db.js"; // Function that connects to MongoDB
import authRoutes from "./routes/authRoutes.js"; // Router for /auth (login/register)
import configurePassport from "./config/passport.js"; // Function that sets up Passport strategies
import protect from "./middlewares/authMiddleware.js"; // Middleware to protect routes (requires login)

// Create the Express app instance
const app = express();

// Load environment variables from .env
config();

// Port on which the server will listen (default 3000)
const PORT = process.env.PORT || 3000;

// 1) DATABASE CONNECTION
// Connect to MongoDB using Mongoose and the URI provided in MONGO_URI
connectDB();

// 2) VIEW ENGINE & STATIC FILES
// Serve static files (CSS, images, etc.) from the "public" folder
app.use(express.static("public"));
// Tell Express to use EJS for rendering views
app.set("view engine", "ejs");
// Parse URL‑encoded form data (from HTML forms)
app.use(express.urlencoded({ extended: true }));

// 3) SESSION MIDDLEWARE
// Configure express-session BEFORE Passport so Passport can use it
app.use(
  session({
    // Secret key used to sign the session ID cookie
    secret: process.env.SESSION_SECRET || "ourLittleSecret",
    // Don't resave session if nothing has changed
    resave: false,
    // Don't save empty sessions for unauthenticated users
    saveUninitialized: false,
  })
);

// 4) PASSPORT INITIALIZATION
// Register the local strategy and serialize/deserialize handlers
configurePassport();
// Initialize Passport so it can hook into the request/response cycle
app.use(passport.initialize());
// Enable persistent login sessions (Passport reads/writes from the session)
app.use(passport.session());

// 5) ROUTES
// Mount all authentication-related routes under /auth
// e.g. /auth/login, /auth/register
app.use("/auth", authRoutes);

// Render the home page (public route)
app.get("/", (req, res) => {
  res.render("home");
});

// 6) PROTECTED ROUTES
// Only logged‑in users (req.isAuthenticated() === true) can access /secrets
app.get("/secrets", protect, (req, res) => {
  res.render("secrets");
});

// Show the submit secret page only to authenticated users
app.get("/submit", protect, (req, res) => {
  res.render("submit");
});

// Handle secret submission (no DB yet; just redirect back to /secrets)
app.post("/submit", protect, (req, res) => {
  // req.body.secret would contain the submitted secret text
  // Here you could save it to a database if desired
  res.redirect("/secrets");
});

// Logout route – ends the user session
app.get("/logout", (req, res, next) => {
  // Passport 0.6+ requires a callback to handle possible errors
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // After logging out, send the user back to the home page
    res.redirect("/");
  });
});

// Start the HTTP server and listen on the chosen port
app.listen(PORT, () => console.log("Server started on port :", PORT));
