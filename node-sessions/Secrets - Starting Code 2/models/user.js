// User model definition
// Describes how user documents are stored in MongoDB using Mongoose.

import mongoose from "mongoose";

// Schema defines the shape of user documents in the "user" collection
const userSchema = new mongoose.Schema({
  // Email is used as the unique identifier for login (like username)
  email: { type: String, required: true, minlength: 8, unique: true },
  // Password will store a bcrypt-hashed password, not the plain text
  password: { type: String, required: true, minlength: 8 },
});

// Create a Mongoose model named "user" based on userSchema
// MongoDB will create/use a "users" collection under the hood
const User = new mongoose.model("user", userSchema);

// Export the model so other files (controllers, Passport config) can use it
export default User;
