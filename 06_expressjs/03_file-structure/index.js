const express = require("express");
const {
  errorHandlerMiddleware,
  registerMiddlewares,
} = require("./middlewares");
const studentRouter = require("./routers/student-router");

const app = express();
registerMiddlewares(app);

app.use("/api/students", studentRouter);

app.use(errorHandlerMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
