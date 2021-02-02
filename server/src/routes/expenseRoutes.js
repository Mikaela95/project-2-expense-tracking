const express = require("express");
const ExpenseApi = require("../models/ExpenseModel");

const router = express.Router();

// Does a session exist for a user
router.use((req, res, next) => {
  console.log("request user router session:", req.session);
  if (!req.session.user) {
    res.status(404).send("Please login");
  } else {
    next();
  }
});

// Health check
router.get("/_health", (req, res) => {
  console.log("session: ", req.session);
  res.send("All g");
});

// Create an expense
router.post("/new-expense", (req, res) => {
  // Extract your request body
  const requestBody = req.body;

  // Call your database and add the expense item
  ExpenseApi.create(requestBody).then((data) => {
    console.log("Expense item added to DB");
    console.log(data);
  });
  res.send("Expense item added to DB");
});

// Update an expense - need to test
router.patch("/update-expense/:id", (req, res) => {
  ExpenseApi.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: true,
  })
    .then((data) => {
      console.log("Update successful");
      res.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!");
      res.status(404).send("Expense item not found");
    });
});

// Delete an expense
router.delete("/delete-expense/:id", (req, res) => {
  ExpenseApi.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Delete successful");
      res.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!");
      res.status(404).send("Expense item not found");
    });
});

module.exports = router;
