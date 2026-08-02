// AI Suggestion Controller

// Resume Improve Suggestion
const improveResume = async (req, res) => {

    try {

        // Frontend se Data lena
        const resumeData = req.body;

        // Improved Summary
        const improvedSummary = `Highly motivated ${
            resumeData.fullName || "candidate"
        } with strong skills in ${
            resumeData.skills || "software development"
        }. Passionate about continuous learning and contributing to organizational growth.`;

        // Skills Array banana
        const improvedSkills = resumeData.skills
            ? resumeData.skills.split(",").map(skill => skill.trim())
            : [];

        // Response
        res.status(200).json({

            success: true,

            message: "Resume Improved Successfully",

            result: {

    improvedSummary,

    atsScore: 84,

    strengths: [

        "Strong communication skills",

        "Knowledge of MERN Stack",

        "Problem-solving ability"

    ],

    weaknesses: [

        "Add more real-world projects",

        "Include certifications",

        "Mention measurable achievements"

    ],

    skills: improvedSkills,

    suggestions: [

        "Use action verbs in experience",

        "Quantify achievements with numbers",

        "Keep resume limited to one page"

    ],

    missingKeywords: [

        "Leadership",

        "Team Collaboration",

        "Communication",

        "Problem Solving"

    ]

}

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Export
module.exports = {

    improveResume

};