// entry point
import newExpense from "./newExpense";
//const newExpense = require("./newExpense");
console.log("Health check");

$("body").prepend(newExpense());
