import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { connect } from "http2";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
config();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => console.log("Server started on port :", PORT));
