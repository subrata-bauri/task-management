import mongoose from "mongoose";
import dns from "dns";

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // exit if DB fails
  }
};
