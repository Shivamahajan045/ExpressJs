const express = require("express");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const booksRouter = require("./routes/books");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.use((req, res, next) => {
  let method = req.method;
  let url = req.url;
  console.log(`${method} request made to ${url}`);
  next();
});

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/books", booksRouter);

app.get("*", (req, res) => {
  res.status(404).send(`<h1>404 - Page Not Found</h1>`);
});

app.listen(4000, () => {
  console.log(
    "Server is up and running on port 4000! Ready to handle requests."
  );
});
