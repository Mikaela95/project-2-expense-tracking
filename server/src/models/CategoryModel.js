const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  // key-value pairs to be added
});

const categoryModel = mongoose.model("Category", categorySchema);
module.exports = categoryModel;
