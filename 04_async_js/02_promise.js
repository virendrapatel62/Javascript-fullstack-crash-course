// const promise = new Promise((resolve, reject) => {
//   console.log("fetching... data ....");
//   setTimeout(() => {
//     // resolve([1, 2, 3]);
//     reject(new Error("Connection Error"));
//   }, 3000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("Error..");
//   });

function getAllStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["student", "virendra", "sandeep"]);
    }, 2000);
  });
}

// getAllStudent()
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log("Error...");
//   });

async function DoSomething() {
  const student = await getAllStudent();
  console.log(student);
}

DoSomething();
