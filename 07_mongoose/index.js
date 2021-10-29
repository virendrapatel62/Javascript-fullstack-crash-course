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

// Todo.find().then((todos) => {
//   console.log(todos);
// });

// Todo.find({ title: "Take Breakfast" }).then((todos) => {
//   console.log(todos);
// });

// Todo.find({ description: "Something.." }).then((todos) => {
//   console.log(todos);
// });

// Todo.find({ _id: "614ffe04b9c751c0bafad970" })
// .then((todos) => {
//   console.log(todos);
// });

// Todo.findById("614ffe04b9c751c0bafad970").then((todo) => {
//   console.log(todo);
// });

// Todo.find()
//   // .sort("title")
//   .sort("-title")
//   .then((todos) => {
//     todos.forEach((todo) => {
//       console.log(todo.title);
//     });
//   });

// Todo.deleteOne({ title: "Take Breakfask" }).then((result) => {
//   console.log(result);
// });
// Todo.findOneAndDelete({ title: "Take Breakfask" }).then((result) => {
//   console.log(result);
// });
