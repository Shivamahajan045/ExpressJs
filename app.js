const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("This is middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("This is middleware 2");
  res.send("<h1>This is middleware 2</h1>");
});

app.listen(3000, () => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  );
});
