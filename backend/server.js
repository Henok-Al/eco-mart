import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("server running on http://localhost:" + PORT);

  connectDB();
});
