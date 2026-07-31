// AI Suggestion Controller

// Resume Improve Suggestion
const improveResume = async (req, res) => {

    try {

        // Frontend se Data lena
        const { objective } = req.body;

        // Improved Summary
        let improvedSummary =
            "Highly motivated and detail-oriented Full Stack Developer with strong problem-solving skills, a passion for continuous learning, and hands-on experience in building responsive web applications using the MERN Stack.";

        // Agar Objective diya hai
        if (objective) {

            improvedSummary =
                "Highly motivated and detail-oriented individual with strong problem-solving abilities and a passion for continuous learning. Seeking an opportunity to contribute effectively while enhancing professional skills.";

        }

        // Response
        res.status(200).json({

            success: true,

            message: "Resume Improved Successfully",

            result: {

                improvedSummary,

                atsScore: 84,

                skills: [

                    "JavaScript",

                    "React",

                    "Node.js",

                    "Express.js",

                    "MongoDB",

                    "Git",

                    "REST API"

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