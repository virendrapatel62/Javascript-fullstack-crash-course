const getAllStudents = (request, response) => {
  response.json(["virendra", "justin", "callum"]);
};

const getStudentById = (request, response) => {
  console.log(request.params);
  response.json(["virendra"]);
};

module.exports = {
  getAllStudents,
  getStudentById,
};
