const Resume = require("../models/Resume");

// Create Resume Controller
const createResume = async (req, res) => {

    try {

        // Frontend se data lena
        const {
            title,
            fullName,
            email,
            phone,
            address,
            summary,
            education,
            skills,
            experience,
            projects
        } = req.body;

        // Resume Create Karna
        const resume = await Resume.create({

            // Login User ki ID
            user: req.user._id,

            title,
            fullName,
            email,
            phone,
            address,
            summary,
            education,
            skills,
            experience,
            projects

        });

        res.status(201).json({

            message: "Resume Created Successfully",
            resume

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
// Get Logged In User Resumes
const getMyResumes = async (req, res) => {

    try {

        const resumes = await Resume.find({
            user: req.user._id
        });

        res.status(200).json({
            success: true,
            count: resumes.length,
            resumes
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// Get Single Resume
const getResumeById = async (req, res) => {

    try {

        // Resume ID URL se lena
        const resume = await Resume.findById(req.params.id);

        // Resume mila ya nahi
        if (!resume) {
            return res.status(404).json({
                message: "Resume Not Found"
            });
        }

        // Security Check
        if (resume.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                message: "Not Authorized"
            });
        }

        res.status(200).json({
            success: true,
            resume
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// Update Resume
const updateResume = async (req, res) => {

    try {

        // Resume Find
        const resume = await Resume.findById(req.params.id);

        // Resume Check
        if (!resume) {
            return res.status(404).json({
                message: "Resume Not Found"
            });
        }

        // Owner Check
        if (resume.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                message: "Not Authorized"
            });
        }

        // Resume Update
        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            message: "Resume Updated Successfully",
            resume: updatedResume
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// Delete Resume
const deleteResume = async (req, res) => {

    try {

        // Resume Find
        const resume = await Resume.findById(req.params.id);

        // Resume Exists?
        if (!resume) {
            return res.status(404).json({
                message: "Resume Not Found"
            });
        }

        // Owner Check
        if (resume.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                message: "Not Authorized"
            });
        }

        // Delete Resume
        await Resume.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Resume Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createResume,
    getMyResumes,
    getResumeById,
    updateResume,
    deleteResume 
    
};