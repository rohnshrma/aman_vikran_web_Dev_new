import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import passport from "passport";
import User from "../models/user.js";

export const SHOW_REGISTER = (req, res) => {
  res.render("register");
};

export const SHOW_LOGIN = (req, res) => {
  res.render("login");
};

export const REGISTER_USER = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
      console.log("User already exists");
      return res.redirect("/auth/login");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email: username,
      password: hashedPassword,
    });

    await user.save();
    console.log("New user registered:", user.email);

    // Automatically log the user in after successful registration
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/secrets");
    });
  } catch (err) {
    console.log(err);
    return res.redirect("/auth/register");
  }
};

