import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cors from "cors";

config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port :", PORT));
