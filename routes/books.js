const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Here is the list of books!");
  res.send(`<h1>Here is the list of books!</h1>`);
});

router.post("/", (req, res) => {
  console.log("Book data received:", req.body);
  res.send(`<h1>Book has been added</h1>`);
});

module.exports = router;
