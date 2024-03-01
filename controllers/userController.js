// userController.js

const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
    try {
        // Fetch user profile data from the database
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const updates = req.body;
        const options = { new: true };

        // Update user profile data
        const updatedUser = await User.findByIdAndUpdate(req.userId, updates, options);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete user account
exports.deleteUserAccount = async (req, res) => {
    try {
        // Delete user account from the database
        const deletedUser = await User.findByIdAndDelete(req.userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
