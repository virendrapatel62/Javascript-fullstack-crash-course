function getAllStudent(callback) {
  console.log("getting data...");
  setTimeout(() => {
    student = [1, 2, 3];
    callback(student);
  }, 2000);
}

console.log("fetching data");
getAllStudent((student) => {
  console.log(student);
});
