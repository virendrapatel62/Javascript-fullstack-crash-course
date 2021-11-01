const express = require("express");
const { createConnection } = require("./db");
const { meetupRouter } = require("./routers/meetup");
const swig = require("swig");

// not for production
// only use on dev mode
swig.setDefaults({
  cache: false,
});

console.log(__dirname + "/views");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "html");
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.engine("html", swig.renderFile);
const PORT = 3000;

createConnection()
  .then(() => {
    console.log("Connection Created..");
  })
  .catch((error) => {
    console.log({
      message: "mongo db connection Error",
      error: error.message,
    });
  });

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.redirect("/meetups");
});

app.use("/meetups", meetupRouter);
