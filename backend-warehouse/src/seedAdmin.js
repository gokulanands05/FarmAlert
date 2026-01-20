import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const exists = await Admin.findOne({ username: "admin" });
  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    username: "admin",
    email: "admin@farmalert.com",   // ✅ ADD THIS
    password: hashedPassword
  });

  console.log("Admin created successfully");
  process.exit();
};

createAdmin();
