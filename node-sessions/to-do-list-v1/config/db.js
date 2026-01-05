// Import mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js
import mongoose from "mongoose";

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // If successful, log the host of the connected database
    console.log("DB RUNNING\n", conn.connection.host);
  } catch (err) {
    // If there is an error, log it and exit the process with failure code
    console.log(err);
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other files
export default connectDB;
