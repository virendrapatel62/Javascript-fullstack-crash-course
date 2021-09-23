const express = require("express");

const app = express();
app.use(express.json());
const students = [{ name: "virendra", id: 1 }];

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});

app.get("/students", (request, response) => {
  console.log(request.query.name);
  console.log(request.query.age);
  response.json({ students });
});

app.post("/students", (request, response) => {
  const name = request.body.name;
  const student = { name, id: students.length + 1 };
  students.push(student);
  response.json({ student });
});

app.get("/students/:id/:age", (request, response) => {
  console.log(request.params.age);
  console.log(request.params.id);
  return response.json(request.params);
});
