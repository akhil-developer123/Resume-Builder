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

        console.log(typeof pdf);
        console.log(pdf);

        // Success Response
        res.status(200).json({

            success: true,

            message: "Resume Uploaded Successfully",

            file: req.file.filename,

            text: pdfData.text

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