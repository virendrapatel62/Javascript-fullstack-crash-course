module.exports.allMeetupPage = (request, response) => {
  response.render("meetup/meetup-list");
};
module.exports.meetupDetailPage = (request, response) => {
  response.render("meetup/meetup-detail");
};
module.exports.meetupForm = (request, response) => {
  response.render("meetup/meetup-form");
};
module.exports.createMeetup = (request, response) => {
  response.render("meetup/meetup-form");
};
module.exports.deleteMeetup = (request, response) => {
  response.render("meetup/meetup-list");
};
