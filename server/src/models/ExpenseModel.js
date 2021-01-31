const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: String,
  projectedExpense: Number,
  actualExpense: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const expenseModel = mongoose.model("Expense", expenseSchema);
module.exports = expenseModel;
