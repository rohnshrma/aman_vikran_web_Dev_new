import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

config();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(PORT, () => console.log("Server started on port :" + PORT));
