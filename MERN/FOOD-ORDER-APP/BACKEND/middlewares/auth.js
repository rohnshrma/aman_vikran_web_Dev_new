import jwt from "jsonwebtoken";
import User from "../models/user.js";

const auth = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ status: "fail", data: null, message: "unauthorized" });
  }

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    req.user = user;
  } catch (err) {
    return res
      .status(401)
      .json({ status: "fail", data: null, message: "Invalid Token" });
  }
};

export default auth;
