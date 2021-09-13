var students = ["virendra", "sandeep", "harsh"];
//                   0         1           2
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

students.push("supriya"); // index 4 ["virendra", "sandeep", "harsh" , "supriya"];

console.log(students);
students.pop(); //["virendra", "sandeep", "harsh"]
console.log(students);

console.log(students.length); // 3

students.forEach(function (item) {
  console.log(item);
});
