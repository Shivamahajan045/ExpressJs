const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {
  let { userId } = req.params;
  res.send(`<h1>Fetching cart for user with ID: ${userId}</h1>`);
});

router.post("/:userId", (req, res) => {
  let { userId } = req.params;
  res.send(`<h1>Adding product to cart for user with ID: ${userId}</h1>`);
});

module.exports = router;
