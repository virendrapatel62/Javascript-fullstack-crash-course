// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
const course = {
  title: "Angular Js Course",
  description: "this is the description of the course",
  price: 999,
  discount: 199,
  instructor: "virendra patel",
};

console.log(typeof course);
console.log(course);
console.log(course.title);
console.log(course.description);

const student = new Object();
student.name = "virendra";
student.age = 23;
student.address = "Jabalpur MP";

console.log(typeof student);
console.log(student);
