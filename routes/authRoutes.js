const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

// Sign Up Route
router.post('/signup', AuthController.signUp);

// Login Route
router.post('/login', AuthController.login);

module.exports = router;
