const getCartById = (req, res) => {
  let { userId } = req.params;
  res.send(`<h1>Fetching cart for user with ID: ${userId}</h1>`);
};

const createCartById = (req, res) => {
  let { userId } = req.params;
  res.send(`<h1>Adding product to cart for user with ID: ${userId}</h1>`);
};

module.exports = {
  getCartById,
  createCartById,
};
