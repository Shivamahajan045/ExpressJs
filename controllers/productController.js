const path = require("path");
const getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "product.html"));
};

const getProductsById = (req, res) => {
  let { id } = req.params;
  res.send(`<h1>Fetching product with ID: ${id}</h1>`);
};

const postProducts = (req, res) => {
  res.send(`<h1>Adding a new product</h1>`);
};

module.exports = {
  getProducts,
  getProductsById,
  postProducts,
};
