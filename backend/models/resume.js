const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    // Resume Owner
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    // Resume Title
    title: {
        type: String,
        default: "Untitled Resume"
    },

    // Resume Template
    template: {
        type: String,
        default: "Classic"
    },

    // Personal Information
    fullName: String,
    email: String,
    phone: String,
    address: String,
    objective: String,

    // Education
    college: String,
    degree: String,
    branch: String,
    university: String,
    passingYear: String,
    cgpa: String,

    // Experience
    company: String,
    jobTitle: String,
    jobLocation: String,
    startDate: String,
    endDate: String,
    jobDescription: String,

    // Skills
    skills: String,

    // Projects
    projectTitle: String,
    technologies: String,
    projectDescription: String,
    githubLink: String,

    // Certifications
    certification: String,

    // Languages
    languages: String

}, {
    timestamps: true
});

module.exports = mongoose.model("Resume", resumeSchema);