const {
  createMeetup,
  deleteMeetup,
  getAllMeetups,
  getMeetupById,
  updateMeetup,
} = require("../controllers/meetup");

const express = require("express");

// /api/meetups
const meetupRouter = express.Router();

meetupRouter.get("/", getAllMeetups);
meetupRouter.get("/:id", getMeetupById);
meetupRouter.post("/", createMeetup);
meetupRouter.put("/:id", updateMeetup);
meetupRouter.delete("/:id", deleteMeetup);

module.exports = { meetupRouter };
