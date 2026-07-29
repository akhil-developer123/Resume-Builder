const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Controller
const registerUser = async (req, res) => {

    try {

        // Frontend se data lena
        const { name, email, password } = req.body;

        // Check karo email pehle se hai ya nahi
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        // Password Hash Karna
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        // Naya User Banana
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User Registered Successfully",
            user
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}
// Login Controller
const loginUser = async (req, res) => {

    try {

        // Frontend se Email aur Password lena
        const { email, password } = req.body;

        // User ko Email se dhoondhna
        const user = await User.findOne({ email });

        // Agar User nahi mila
        if (!user) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        // Password Compare karna
        const isMatch = await bcrypt.compare(password, user.password);

        // Agar Password galat hai
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        // JWT Token Banana
        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    registerUser,
    loginUser
};