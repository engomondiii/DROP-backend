// authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
    // Extract the token from the request headers
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, config.jwt.secret, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            // Check if user associated with the token exists in the database
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Attach the user ID to the request object for further processing
            req.userId = decoded.id;
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
};
