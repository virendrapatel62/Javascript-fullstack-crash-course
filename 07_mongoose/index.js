const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;
const { String, Number, Array } = Types;

mongoose
  .connect("mongodb://localhost:27017/test-db")
  .then(() => {
    console.log("Connected...");
  })
  .catch((err) => {
    console.log("Error while connecting");
  });

const todoSchema = new Schema({
  title: String,
  description: String,
  priority: Number,
});

const Todo = mongoose.model("TODO", todoSchema);

// const todo = new Todo({ title: "Take Breakfask", description: "Something.." });
// todo.save().then((result) => {
//   console.log(result);
// });

// Todo.create([
//   { title: "Take Breakfask", description: "Something.." },
//   { title: "Take Lunch", description: "Something.." },
//   { title: "Do Homework", description: "Something.." },
//   { title: "code in JS", description: "Something.." },
//   { title: "Learn DS", description: "Something.." },
// ]).then((todos) => {
//   console.log(todos);
// });
