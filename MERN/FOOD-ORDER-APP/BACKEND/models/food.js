import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    available: { type: Boolean, default: true },
    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Food", foodSchema);
