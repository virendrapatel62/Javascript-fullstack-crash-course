const express = require("express");

const app = express();
app.listen(3000, () => {
  console.log("Running on 3000");
});

function onlyForStudent(request, response, next) {
  console.log("Will run only for students");
  next();
}

function middleware(request, response, next) {
  console.log({
    params: request.params,
    query: request.query,
  });
  next();
}

app.use(middleware);

app.get("/students", onlyForStudent, (request, response, next) => {
  try {
    // throw new Error("Something went wrong");
    response.json({ message: "Students" });
  } catch (error) {
    next(error);
  }
});
app.get("/course", (request, response) => {
  response.json({ message: "Courses" });
});
app.get("/books", (request, response) => {
  response.json({ message: "Books" });
});

app.use((error, request, response, next) => {
  response.status(500).json({ message: error.message });
});
