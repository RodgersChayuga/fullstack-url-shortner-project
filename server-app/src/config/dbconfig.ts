// @ts-nocheck
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // help to access .env file

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING
    );
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
