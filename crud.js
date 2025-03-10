const express = require("express");
const studentsRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");
const app = express();

//home route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Student & Course Portal API!</h1>`);
});

//students routes
app.use("/students", studentsRouter);

//courses route
app.use("/courses", coursesRouter);

app.use((req, res) => {
  res.status(404).send(`<h1>Page not found!</h1>`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
