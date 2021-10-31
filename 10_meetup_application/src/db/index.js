const mongoose = require("mongoose");
function createConnection(params) {
  const connectionURL = "mongodb://localhost:27017/meetups";
  return mongoose.connect(connectionURL);
}

module.exports = { createConnection };
