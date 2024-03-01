// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Get user profile
router.get('/profile', authMiddleware.verifyToken, userController.getUserProfile);

// Update user profile
router.patch('/profile', authMiddleware.verifyToken, userController.updateUserProfile);

// Delete user account
router.delete('/profile', authMiddleware.verifyToken, userController.deleteUserAccount);


module.exports = router;
