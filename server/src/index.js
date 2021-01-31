const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

// Import router files
const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const expenseRouter = require("./routes/expenseRoutes");

// Set up connection to DB
const mongoDB = "mongodb://localhost:27017/expenseTracking";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Initialise connection - error checking
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Initialise app object
const app = express();

// Define the port number that your backend will be running on
const port = 4000;

// Add middleware to work with JSON file types
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "random secret",
    resave: false, // future work - Optimistic Concurrency Control
    saveUninitialized: false,
  })
);

// Use routers previously defined
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/expenses", expenseRouter);

app.listen(port, () => {
  console.log(`Expense tracking app is listening at http://localhost:${port}`);
});
