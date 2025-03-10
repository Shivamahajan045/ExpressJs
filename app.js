const express = require("express");
const app = express();

app.get("/orders", (req, res) => {
  console.log("Here is the list of all orders.");
  res.send(`<h1>Here is the list of all orders.</h1>`);
});

app.post("/orders", (req, res) => {
  console.log("A new order has been created.");
  res.send(`<h1>A new order has been created.</h1>`);
});

app.get("/users", (req, res) => {
  console.log("Here is the list of all users.");
  res.send(`<h1>Here is the list of all users.</h1>`);
});

app.post("/users", (req, res) => {
  console.log("A new user has been added.");
  res.send(`<h1>A new user has been added</h1>`);
});

app.listen(3000, () => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  );
});
