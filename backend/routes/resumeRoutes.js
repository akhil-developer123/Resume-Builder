const express = require("express");
const router = express.Router();

const {
    createResume,
    getMyResumes,
    getResumeById,
    updateResume,
    deleteResume
} = require("../controllers/resumeController");

// Middleware Import
const protect = require("../middleware/authMiddleware");

// Create Resume Route
router.post("/", protect, createResume);
router.get("/", protect, getMyResumes);
router.get("/:id", protect, getResumeById);
router.put("/:id", protect, updateResume);
router.delete("/:id", protect, deleteResume);


module.exports = router;