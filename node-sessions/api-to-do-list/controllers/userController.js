import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const REGISTER = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email , Name and Password are required",
      });
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User Exists");
      return res.status(400).json({
        status: "fail",
        message: "User already exists with same email",
      });
    }

    let user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    await user.save();

    console.log("User Added");

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    if (!token) {
      return res.status(400).json({
        status: "fail",
        message: "failed to generate token",
      });
    }

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
        token,
      },
      message: "User Registered",
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ error: err, status: "fail", message: "Failed to Register User" });
  }
};

export const LOGIN = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email and Password are required!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User Doesn't Exist!" });
    }

    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid Password!" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    if (!token) {
      return res.status(400).json({
        status: "fail",
        message: "failed to generate token",
      });
    }
    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
        token,
      },
      message: "Login Successful",
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ error: err, status: "fail", message: "login failed!" });
  }
};
