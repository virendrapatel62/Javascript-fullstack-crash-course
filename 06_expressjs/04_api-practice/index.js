const express = require("express");
const { registerMiddlewares } = require("./middlewares");
const { courseRouter } = require("./routers/course");
const app = express();

registerMiddlewares(app);

const PORT = 3000;

app.get(["/", "/api"], (request, response) => {
  response.json({ message: "Api is working" });
});

app.use("/api/courses", courseRouter);

app.listen(PORT, () => {
  console.log("Server is running or port ", PORT);
});
