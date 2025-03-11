const getUsers = (req, res) => {
  res.send(`<h1>Fetching all users.</h1>`);
};

const createUser = (req, res) => {
  res.send(`<h1>Add a new user.</h1>`);
};

const getUsersById = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Fetching user with ID: ${id}</h1>`);
};

module.exports = {
  getUsers,
  createUser,
  getUsersById,
};
