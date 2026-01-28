import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ status: "fail", message: "No token, authorization denied" });
    }
    const token = authHeader.split(" ")[1];
    console.log("token : ", token);

    if (!token) {
      return res
        .status(401)
        .json({ status: "fail", message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.userId) {
      return res
        .status(401)
        .json({ status: "fail", message: "Token is not valid" });
    }

    // Attach full user document (without password) to req for controllers
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", message: "User no longer exists" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res
      .status(401)
      .json({ status: "fail", message: "Token verification failed" });
  }
};
