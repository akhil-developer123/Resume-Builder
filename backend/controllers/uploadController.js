// File System
const fs = require("fs");

// PDF Parser
const pdf = require("pdf-parse");

// Upload Resume Controller
const uploadResume = async (req, res) => {

    try {

        // Check File
        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "No File Uploaded"

            });

        }

        // PDF Path
        const filePath = req.file.path;

        // PDF Read
        const dataBuffer = fs.readFileSync(filePath);

        // PDF Text Extract
        const pdfData = await pdf(dataBuffer);

        // ----------------------------
        // Dummy AI Analysis
        // ----------------------------

        const result = {

            improvedSummary:
                "Highly motivated Full Stack Developer with strong knowledge of React, Node.js, Express.js and MongoDB. Passionate about building scalable web applications and continuously improving technical skills.",

            skills: [

                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "HTML",
                "CSS",
                "Git"

            ],

            atsScore: 88,

            strengths: [

                "Good Education",
                "Technical Skills",
                "Project Experience"

            ],

            weaknesses: [

                "Career Objective can be stronger",
                "Add more Projects",
                "Add Certifications"

            ],

            suggestions: [

                "Improve Career Objective",
                "Add GitHub Profile",
                "Mention Internship Experience",
                "Include Soft Skills"

            ],

            missingKeywords: [

                "REST API",
                "JWT",
                "Problem Solving",
                "Team Collaboration"

            ]

        };

        // Success Response
        res.status(200).json({

            success: true,

            message: "Resume Uploaded Successfully",

            file: req.file.filename,

            text: pdfData.text,

            result

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    uploadResume

};