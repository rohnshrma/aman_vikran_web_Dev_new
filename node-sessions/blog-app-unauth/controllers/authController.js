// TODO: Create authentication controller here
// This file should contain:
// 1. register function - handle user registration
// 2. login function - handle user login
// 3. logout function - handle user logout
// 4. googleCallback function - handle Google OAuth callback

import passport from "passport";
import bcrypt from "bcryptjs";

// See tasks.md for detailed instructions
import User from "../models/User.js";

export const SHOW_LOGIN = (req, res) => {
  res.render("login");
};

export const SHOW_REGISTER = (req, res) => {
  res.render("register");
};

export const REGISTER = async (req, res) => {
  try {
    console.log("Register endpoint hit");
    const { email, password } = req.body;
    console.log("Received registration data:", { email });

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      console.log("User already exists with email:", email);
      return res.redirect("/auth/login");
    }

    console.log("Hashing password for:", email);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: email,
      password: hashedPassword,
    });

    console.log("Saving new user to database:", email);
    await newUser.save();
    console.log("User registered successfully:", email);

    req.login(newUser, (err) => {
      if (err) {
        console.log("Login after registration failed:", err);
        return res.send({ message: "Login after registration failed" });
      }
      console.log("User logged in after registration:", email);
      return res.redirect("/home");
    });
  } catch (err) {
    console.log("Registration failed:", err.message);
    res.send({ message: "Registration failed", error: err.message });
  }
};

export const LOGIN = passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/auth/login",
});

export const LOGOUT = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/auth/login");
  });
};

export const GOOGLE = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const GOOGLE_CALLBACK = passport.authenticate("google", {
  successRedirect: "/home",
  failureRedirect: "/auth/login",
});
