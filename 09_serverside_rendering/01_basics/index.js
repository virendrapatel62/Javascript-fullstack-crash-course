const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/students", (req, res) => {
  res.sendFile(__dirname + "/students.html");
});
