const express = require("express");
const mongoose = require("mongoose");
const Expense = require("./models/ExpenseModel");
const cors = require("cors")

// connecting to mongoDB server - second parameter is an object
mongoose.connect("mongodb://localhost:27017/expenseTracking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialise app object
const app = express();

// Add middleware to be able to read and understand json files
app.use(express.json());
app.use(cors());

// Import all routers
const expenseRouter = require("./routes/expenseRoutes");

// start the server - .listen is a method from express, accepts port number and callback function
app.listen(4000, () => {
  console.log("server is running!");
});

// User hits /expense router, send to expense routes file
app.use("/expense", expenseRouter);

// name of the route and the callback function - what do you want the person to do when they get there

// check that server is running
app.get("/", (req, res) => {
  res.send("Server is ok");
});

app.get("/hello", (req, res) => {
  // response
  res.send("Hello world, first get route");
});

app.post("/expense", (req, res) => {
  console.log("req.body:", req.body);
  Expense.create(req.body)
    .then((data) => {
      // data is the entire payload being sent from Postman
      res.send(data);
    })
    .catch((error) => {
      res.send("Could not create expense :(");
    });
});

app.patch("/expense/:id", (req, res) => {
  console.log("param expense id", req.params.id);
  Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send("Could not create expense :(");
    });
});
