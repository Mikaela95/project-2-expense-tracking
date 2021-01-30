// Import everything you need
const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/UserModel");

// Create a new router to handle internal routes
const router = express.Router();

// Health check
router.get("/health-check", (req, res) => {
  req.session.testProperty = "Test that the following gets saved";
  res.send("All g");
});

// Create a user
router.post("/register", (req, res) => {
  //to-do
  const body = req.body;
  console.log("user register body: ", body);
  const passwordHash = bcrypt.hashSync(body.password, 10);
  console.log("passwordHash: ", passwordHash);

  const user = { username: body.username, password: passwordHash };
  console.log("user: ", user);

  userModel.create(user).then((userData) => {
    res.send(userData);
  });
});

// Log in an existing user
router.post("/login", (req, res) => {
  // log in
});

// Log out a user
router.get("/logout", (req, res) => {
  // Log out
});

module.exports = router;

/********** Future work *************/

// Forgotten password

// Change passoword
