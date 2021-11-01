const { Meetup } = require("../models/meetup");

module.exports.allMeetupPage = async (request, response) => {
  const meetups = await Meetup.find();
  response.render("meetup/meetup-list", { meetups });
};

module.exports.meetupDetailPage = async (request, response) => {
  const id = request.params.id;
  const meetup = await Meetup.findById(id);
  response.render("meetup/meetup-detail", { meetup });
};

module.exports.meetupForm = (request, response) => {
  response.render("meetup/meetup-form");
};

module.exports.createMeetup = (request, response) => {
  const meetup = request.body;
  Meetup.create(meetup)
    .then((meetup) => {
      console.log("Created", meetup);
      response.render("meetup/meetup-form", { message: "Meetup Created." });
    })
    .catch((error) => {
      response.render("meetup/meetup-form", { error: error.message });
    });
};
module.exports.deleteMeetup = (request, response) => {
  console.log("Delete meetup", request.params.id);
  const id = request.params.id;
  Meetup.deleteOne({ _id: id }).then(() => response.redirect("/meetups"));
};
