// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const aiRoutes = require("./routes/aiRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- MongoDB Connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // serve uploaded files

// --- Routes ---
app.use("/api/ai", aiRoutes);

// --- Root Route ---
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the AI College Assistant Backend!");
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error("❗ Server error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

// --- Server Start ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
