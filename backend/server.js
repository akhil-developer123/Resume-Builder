const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const protect = require("./middleware/authMiddleware");
const aiRoutes = require("./routes/aiRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const connectDB = require("./config/db"); 

dotenv.config();

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