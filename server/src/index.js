const express = require("express");

// invoke the function
const app = express();

// start the server - .listen is a method from express, accepts port number and callback function
app.listen(4000, () => {
  console.log("server is running!");
});
