// Database connection helper using Mongoose
// Responsible only for connecting to MongoDB with the URI from environment variables.

import mongoose from "mongoose";

// Async function that attempts to connect to MongoDB
const connectDB = async () => {
  try {
    // Use the MONGO_URI from your .env file to connect
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // Log which host MongoDB is running on (useful for debugging)
    console.log("DB RUNNING :", conn.connection.host);
  } catch (err) {
    // If any error occurs, log it
    console.log(err);
    // Exit the Node process with a failure code so you notice the problem
    process.exit(1);
  }
};

// Export the connectDB function so app.js can import and call it
export default connectDB;
