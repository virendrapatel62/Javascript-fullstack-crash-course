// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions

// function sayHello(name) {
//   if (name) {
//     console.log("Hello " + name);
//   } else {
//     console.log("Hello Guest");
//   }
// }

var sayHello = function (name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello Guest");
  }
};

sayHello("Virendra");
sayHello();
sayHello("Sandeep");
sayHello("Harsh");

function doubleIt(number) {
  return number * 2;
}

console.log(doubleIt(5));

const multipleBy2 = doubleIt;

console.log(multipleBy2(6));
