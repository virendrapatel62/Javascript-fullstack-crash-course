const express = require("express");
const courseRouter = express.Router();
// /api/courses/

const courses = [
  { id: 1, name: "Angular Course", author: "Virendra" },
  { id: 2, name: "Node Course", author: "Virendra" },
];

courseRouter.get("/", (request, response) => {
  response.json({ courses });
});

courseRouter.get("/:id", (request, response) => {
  const id = request.params.id;
  const course = courses.find((course) => course.id == id);

  if (course) return response.json({ course });

  response.status(404).json({ message: "Not Found", id: id });
});

courseRouter.post("/", (request, response) => {
  const course = request.body;

  console.log(course);
  course.id = courses.length + 1;

  courses.push(course);

  response.json({ course });
});

courseRouter.delete("/:id", (request, response) => {
  const id = request.params.id;
  const index = courses.findIndex((course) => course.id == id);

  if (index > -1) {
    courses.splice(index, 1);
    return response.status(204).send();
  }

  response.status(404).json({ message: "Not Found", id: id });
});
module.exports = { courseRouter };
