const express = require("express");
// const dotenv = require("dotenv");
require("dotenv").config();
const cors = require("cors");
const protect = require("./middleware/authMiddleware");
const aiRoutes = require("./routes/aiRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const dns=require("dns");

const connectDB = require("./config/db"); 
dns.setServers(["8.8.8.8","8.8.4.4"]);

// dotenv.config();

// console.log("ENV Keys:", Object.keys(process.env));
// console.log("Gemini:", process.env.GEMINI_API_KEY);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Auth Routes Import
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

app.get("/", (req, res) => {
    res.send("Backend Running...");
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend Connected Successfully"
    });
});

app.get("/api/profile", protect, (req, res) => {
    res.json({
        message: "Welcome",
        user: req.user
    });

});

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});