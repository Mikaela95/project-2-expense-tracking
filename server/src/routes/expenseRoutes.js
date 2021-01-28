const express = require("express");
const ExpenseApi = require("../models/ExpenseModel");

const router = express.Router();

router.get("/_health", (req, res) => {
  res.send("All is working");
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

// Update an expense

// Delete an expense

module.exports = router;
