import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    items: [
      {
        foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
        quantity: Number,
        priceSnapshot: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
