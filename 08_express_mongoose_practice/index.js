const express = require("express");
const { meetupRouter } = require("./routers/meetup");
const createConnection = require("./db");
const app = express();
app.use(express.json());

createConnection().then(() => {
  console.log("Mongo DB connected");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

app.get("/", (req, res) => {
  res.json({
    message: "App is working..",
  });
});

app.use("/api/meetups", meetupRouter);
