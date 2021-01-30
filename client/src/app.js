// entry point
import newExpense from "./expenses/newExpense";
//const newExpense = require("./newExpense");
console.log("Health check");

$("body").prepend(newExpense());
