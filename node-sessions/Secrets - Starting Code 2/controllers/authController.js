// Authentication controller
// Contains handlers for showing login/register pages and registering users.

import mongoose from "mongoose"; // Mongoose is available if you want to extend logic later
import bcrypt from "bcryptjs"; // To hash passwords securely
import passport from "passport"; // Used indirectly for req.login
import User from "../models/user.js"; // Mongoose model for storing users

// Render the registration page
export const SHOW_REGISTER = (req, res) => {
  // Simply render the EJS template "views/register.ejs"
  res.render("register");
};

// Render the login page
export const SHOW_LOGIN = (req, res) => {
  // Simply render the EJS template "views/login.ejs"
  res.render("login");
};

// Handle user registration and automatically log the user in
export const REGISTER_USER = async (req, res, next) => {
  try {
    // Extract form fields from the request body (names come from register.ejs)
    const { username, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
      console.log("User already exists");
      // If yes, send them to the login page instead of creating a new account
      return res.redirect("/auth/login");
    }

    // Hash the plain-text password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const user = new User({
      email: username,
      password: hashedPassword,
    });

    // Save the user to MongoDB
    await user.save();
    console.log("New user registered:", user.email);

    // Log the user in using Passport so that req.isAuthenticated() becomes true
    req.login(user, (err) => {
      if (err) {
        // Pass error to Express error handler if login fails
        return next(err);
      }
      // On success, redirect to the protected /secrets page
      return res.redirect("/secrets");
    });
  } catch (err) {
    console.log(err);
    // If something goes wrong (validation, DB error, etc.), send back to register page
    return res.redirect("/auth/register");
  }
};

