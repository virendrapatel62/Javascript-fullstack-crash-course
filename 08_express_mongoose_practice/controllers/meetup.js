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
  const meetup = request.body;
  Meetup.create(meetup)
    .then((meetup) => {
      response.status(201).json({ meetup });
    })
    .catch((err) => {
      response.status(400).json({ error: err.message });
    });
}
function deleteMeetup(request, response) {
  const { id } = request.params;
  Meetup.deleteOne({ _id: id }).then(() => response.status(204).send());
}
function updateMeetup(request, response) {
  const update = request.body;
  const id = request.params.id;

  Meetup.findOneAndUpdate(
    { _id: id },
    {
      $set: update,
    },
    { new: true }
  ).then((updated) => response.json({ meetups: updated }));
}

module.exports = {
  getAllMeetups,
  getMeetupById,
  updateMeetup,
  deleteMeetup,
  createMeetup,
};
