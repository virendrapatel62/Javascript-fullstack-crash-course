const express = require("express");
const {
  allMeetupPage,
  meetupForm,
  createMeetup,
  deleteMeetup,
  meetupDetailPage,
} = require("../controllers/meetup");
const meetupRouter = express.Router();

// meetups

meetupRouter.get("/", allMeetupPage);

meetupRouter.get("/create", meetupForm);
meetupRouter.post("/create", createMeetup);
meetupRouter.get("/:id", meetupDetailPage);
meetupRouter.delete("/:id", deleteMeetup);

module.exports = { meetupRouter };
