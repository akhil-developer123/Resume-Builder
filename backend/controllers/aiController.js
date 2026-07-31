// AI Suggestion Controller

// Resume Improve Suggestion
const improveResume = async (req, res) => {

    try {

        // Frontend se data lena
        const { objective } = req.body;

        let improvedObjective = objective;

        // Simple AI Rules
        if (objective) {

            improvedObjective =
                "Highly motivated and detail-oriented individual with strong problem-solving abilities and a passion for continuous learning. Seeking an opportunity to contribute effectively while enhancing professional skills.";

        }

        // Response
        res.status(200).json({

            success: true,

            objective: improvedObjective

        });

    } catch (error) {

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