const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  let courseNames = courses.map((course) => {
    return course.name;
  });
  res.send(`<h1>Courses: ${courseNames.join(", ")}</h1>`);
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  let course = courses.find((course) => course.id === parseInt(id));

  if (course) {
    res.send(
      `<h1>Course: ${course.name}, Description : ${course.description}</h1>`
    );
  } else {
    res.status(404).send(`<h1>Course not found!</h1>`);
  }
});

module.exports = router;
