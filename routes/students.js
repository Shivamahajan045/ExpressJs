const express = require("express");
const router = express.Router();

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  let studentNames = students.map((student) => {
    return student.name;
  });
  res.send(`<h1>Students: ${studentNames.join(", ")}</h1>`);
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  const student = students.find((student) => student.id === parseInt(id));

  if (student) {
    res.send(`<h1>Student:${student.name}</h1>`);
  } else {
    res.status(404).send(`<h1>Student not found!</h1>`);
  }
});

module.exports = router;
