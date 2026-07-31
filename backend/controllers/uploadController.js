// Upload Resume Controller

const uploadResume = async (req, res) => {

    try {

        // Check file upload
        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "No File Uploaded"

            });

        }

        // Success Response
        res.status(200).json({

            success: true,

            message: "Resume Uploaded Successfully",

            file: req.file.filename

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    uploadResume

};