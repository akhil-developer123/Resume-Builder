const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {

    try {

        let token;

        // Authorization Header Check
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {

            // Token Nikalna
            token = req.headers.authorization.split(" ")[1];

            // Token Verify Karna
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // User Find Karna
            req.user = await User.findById(decoded.id).select("-password");

            // Next Function Call
            next();

        } else {

            return res.status(401).json({
                message: "Not Authorized, Token Missing"
            });

        }

    } catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        });

    }

};

module.exports = protect;