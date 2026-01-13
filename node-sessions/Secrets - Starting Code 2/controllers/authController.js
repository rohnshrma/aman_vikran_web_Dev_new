import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const SHOW_REGISTER = (req, res) => {
  res.render("register");
};
export const SHOW_LOGIN = (req, res) => {
  res.render("login");
};
export const REGISTER_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
      console.log("User already exists");
      res.redirect("/login");
    }

    const user = new User({
      email: username,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();
    console.log(user);

    res.render("secrets");
  } catch (err) {
    console.log(err);
    res.redirect("/auth/register");
  }
};
export const LOGIN_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email: username });

    if (!existingUser) {
      console.log("User not found");
      res.redirect("/register");
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
      console.log(existingUser);
      res.render("secrets");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/auth/login");
  }
};
