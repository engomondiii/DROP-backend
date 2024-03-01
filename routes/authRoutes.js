// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/register', authController.registerUser);

// User login
router.post('/login', authController.loginUser);

// User logout (optional)
router.post('/logout', authController.logoutUser);

module.exports = router;
