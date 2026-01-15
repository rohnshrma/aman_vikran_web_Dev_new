// User model definition
// Describes how user documents are stored in MongoDB using Mongoose.

import mongoose from "mongoose";

// Schema defines the shape of user documents in the "user" collection
const userSchema = new mongoose.Schema({
  // Email is used as the unique identifier for login (like username)
  email: { type: String, required: true, minlength: 8, unique: true },
  // Password will store a bcrypt-hashed password, not the plain text
  // Made optional for Google OAuth users who don't have a password
  password: { type: String, minlength: 8 },
  // Google OAuth ID for users who sign in with Google
  googleId: { type: String, sparse: true },
});

// Create a Mongoose model named "user" based on userSchema
// MongoDB will create/use a "users" collection under the hood
const User = new mongoose.model("user", userSchema);

// Export the model so other files (controllers, Passport config) can use it
export default User;
