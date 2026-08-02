const mongoose = require("mongoose");


const resumeSchema = new mongoose.Schema(

{

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },


    // Resume Title

    title: {

        type: String,

        default: "My Resume"

    },


    // Personal Information

    fullName: String,

    email: String,

    phone: String,

    address: String,


    // Objective

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

    skills: [String],


    // Projects

    projectTitle: String,

    technologies: String,

    projectDescription: String,

    githubLink: String,


    // Extra Sections

    certification: String,

    languages: String,


    // Template

    template: {

        type: String,

        default: "Classic"

    }


},

{

    timestamps: true

}


);


module.exports = mongoose.model(

    "Resume",

    resumeSchema

);