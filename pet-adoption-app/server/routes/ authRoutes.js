// server/routes/authRoutes.js

const express = require("express");
const { register, login } = require("../controllers/authController"); // Import controller functions
const router = express.Router();

// Route for user registration
router.post("/register", register);

// Route for user login
router.post("/login", login);

module.exports = router; // Export the router
