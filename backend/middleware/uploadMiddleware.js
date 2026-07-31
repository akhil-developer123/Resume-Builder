const multer = require("multer");
const path = require("path");

// Storage Location
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads/");

    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() +
            path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

// File Filter
const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        ".pdf",
        ".doc",
        ".docx"
    ];

    const extension = path.extname(file.originalname);

    if (allowedTypes.includes(extension)) {

        cb(null, true);

    } else {

        cb(
            new Error("Only PDF and DOCX files are allowed"),
            false
        );

    }

};

// Multer Upload
const upload = multer({

    storage,
    fileFilter

});

module.exports = upload;