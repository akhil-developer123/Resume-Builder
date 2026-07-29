// Mongoose ko import kar rahe hain
const mongoose = require("mongoose");

// User Schema bana rahe hain
const userSchema = new mongoose.Schema({

    // User ka Name
    name: {
        type: String,
        required: true
    },

    // User ka Email
    email: {
        type: String,
        required: true,
        unique: true
    },

    // User ka Password
    password: {
        type: String,
        required: true
    }

});

// User Model bana rahe hain
const User = mongoose.model("User", userSchema);

// Model export kar rahe hain
module.exports = User;