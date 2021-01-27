const express = require("express");

const router = express.Router();

router.get("/_health", (req, res) => {
  res.send("All is working");
});

module.exports = router;