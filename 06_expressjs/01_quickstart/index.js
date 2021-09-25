const { response } = require("express");
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

app.put("/students/:id", (request, response) => {
  console.log("Handling Put Request");
  console.log("Updating " + request.params.id);
  return response.json({
    message: "put request",
    params: request.params,
    body: request.body,
  });
});

app.delete("/students/:studentid", (request, response) => {
  console.log("Deleting student of id ", request.params.studentid);
  response.status(204).json({
    message: "student deleted",
  });
});

app.get("/200", (request, response) => {
  response.status(200).json({
    message: "Success Response",
  });
});

app.get("/404", (request, response) => {
  response.status(404).json({
    message: "Not-found",
  });
});
