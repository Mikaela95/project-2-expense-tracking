// Import everything you need
const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/UserModel");
const { request } = require("express");

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
  // Check if user exists
  userModel.findOne({ username: req.body.username }).then((userData) => {
    if (userData) {
      const checkHashPassword = bcrypt.compareSync(
        req.body.password,
        userData.password
      );
      if (checkHashPassword) {
        console.log("request.session", request.session);
        req.session.user = {
          id: userData._id,
        };
        console.log("request.session", req.session);
        res.send({id: userData._id});
      } else {
        res.status(401).send("Incorrect password");
      }
    } else {
      res.status(401).send("Username doesn't exist");
    }
  });
});

// Log out a user
router.get("/logout", (req, res) => {
  // Log out
});

module.exports = router;

/********** Future work *************/

// Forgotten password

// Change passoword
