const { Meetup } = require("../models/meetup");

// Meetup.create({
//   title: "Some Meetup",
//   description: "Description",
//   location: "Delhi",
//   image: "https://picsum.photos/seed/picsum/200/300?q=12",
// }).then(console.log);

function getAllMeetups(request, response) {
  Meetup.find().then((meetups) => {
    response.json({ meetups });
  });
}
function getMeetupById(request, response) {
  const id = request.params.id;
  Meetup.findById(id).then((meetup) => {
    if (meetup) {
      return response.json({ meetup });
    }

    return response
      .status(404)
      .json({ message: `Meetup not found with the id ${id}` });
  });
}
function createMeetup(request, response) {
  response.json([1, 2, 3]);
}
function deleteMeetup(request, response) {
  response.json([1, 2, 3]);
}
function updateMeetup(request, response) {
  response.json([1, 2, 3]);
}

module.exports = {
  getAllMeetups,
  getMeetupById,
  updateMeetup,
  deleteMeetup,
  createMeetup,
};
