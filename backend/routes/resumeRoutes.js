const express = require("express");
const router = express.Router();

const {

    createResume,

    getMyResumes,

    getResumeById,

    updateResume,

    deleteResume,

    renameResume,

    duplicateResume

} = require("../controllers/resumeController");

// Middleware Import
const protect = require("../middleware/authMiddleware");

// Create Resume Route
router.post("/", protect, createResume);
router.get("/", protect, getMyResumes);
router.get("/:id", protect, getResumeById);
router.put("/:id", protect, updateResume);
router.delete("/:id", protect, deleteResume);
// Rename Resume
router.put("/rename/:id", protect, renameResume);

// Duplicate Resume
router.post("/duplicate/:id", protect, duplicateResume);


module.exports = router;