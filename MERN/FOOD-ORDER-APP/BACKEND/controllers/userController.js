import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ status: "fail", data: null, message: "Missing fields" });
  }

  const exists = await User.findOne({ email });

  if (exists)
    return res
      .status(400)
      .json({ status: "fail", data: null, message: "Email Already Exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  res.json({
    status: "sucess",
    data: { user, token: generateToken(user._id) },
    message: "User Registered",
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "fail", data: null, message: "User Not Found" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res
      .status(401)
      .json({ status: "fail", data: null, message: "Wrong Password" });
  }

  res.json({
    status: "success",
    data: { user, token: generateToken(user._id) },
    message: "Logged Successfully",
  });
};
