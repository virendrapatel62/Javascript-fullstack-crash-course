const express = require("express");
const { students } = require("./data");
const swig = require("swig");
const app = express();

app.use(express.json());
app.set("view engine", "html");
app.set("views", __dirname + "/pages");
app.engine("html", swig.renderFile);

swig.setDefaults({
  cache: false,
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

app.get("/", (req, res) => {
  const context = {
    name: "virendra",
    date: new Date(),
  };
  res.render("home", context);
});
app.get("/students", (req, res) => {
  const context = {
    students,
  };
  res.render("students", context);
});
