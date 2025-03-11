const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const app = express();

//middleware to parse json
app.use(express.json());

// User Routes
app.use("/users", userRouter);

//Product Routes
app.use("/products", productRouter);

//cart routes
app.use("/cart", cartRouter);

app.use((req, res) => {
  res.status(404).send(`<h1>Page not found!</h1>`);
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Server is listening to port ${port}`);
});
