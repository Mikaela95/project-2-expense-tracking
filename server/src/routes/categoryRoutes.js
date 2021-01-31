const express = require("express");
const CategoryApi = require("../models/CategoryModel");

const router = express.Router();

// Health check
router.get("/_health", (req, res) => {
  console.log("session: ", req.session);
  res.send("All g");
});

// Get all categories
router.get("/all-categories", (req, res) => {
  CategoryApi.find()
    .then((categories) => {
      res.send(categories);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Create a new category
router.post("/create-category", (req, res) => {
  const requestBody = req.body;
  CategoryApi.create(requestBody)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send("Unable to create category");
    });
});

// Delete a category
router.patch("/delete-category/:id", (req, res) => {
  CategoryApi.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Delete successful");
      res.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!");
      res.status(404).send("Category not found");
    });
});

module.exports = router;
