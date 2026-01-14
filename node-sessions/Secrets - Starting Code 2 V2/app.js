import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import session from "express-session";
import passport from "passport";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import configurePassport from "./config/passport.js";
import protect from "./middlewares/authMiddleware.js";

const app = express();
config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// View engine & static files
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Session configuration (must come before passport.session)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "ourLittleSecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport configuration & middleware
configurePassport();
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

// Protected secrets page
app.get("/secrets", protect, (req, res) => {
  res.render("secrets");
});

// Example protected submit routes (optional, since your submit page is secret-only)
app.get("/submit", protect, (req, res) => {
  res.render("submit");
});

app.post("/submit", protect, (req, res) => {
  // Handle saving the secret here if needed
  // For now, just redirect back to /secrets
  res.redirect("/secrets");
});

// Logout route
app.get("/logout", (req, res, next) => {
  // Passport 0.6+ requires a callback for req.logout
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => console.log("Server started on port :", PORT));
