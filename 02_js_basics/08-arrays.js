var students = ["virendra", "sandeep", "harsh"];
//                   0         1           2
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

students.push("supriya");

console.log(students);
students.pop();
console.log(students);

console.log(students.length);

students.forEach(function (item) {
  console.log(item);
});
