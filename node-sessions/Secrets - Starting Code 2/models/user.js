import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, minlength: 8, unique: true },
  password: { type: String, required: true, minlength: 8 },
});

const User = new mongoose.model("user", userSchema);

export default User;
