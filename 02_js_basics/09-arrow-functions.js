function sayHello() {
  console.log("Hello...");
}
sayHello();

const sayHello2 = function () {
  console.log("Hello from variable....");
};

sayHello2();

const arrowFunction = () => {
  console.log("Arrow Function");
};

arrowFunction();

let sum = () => {
  const x = 90,
    y = 89;
  const z = x + y;
  console.log("Sum is ", z);
};

sum();

sum = (x, y) => {
  const z = x + y;
  console.log("Sum is ", z);
};

sum(10, 20);

sum = (x, y) => {
  const z = x + y;
  return z;
};

console.log(sum(10, 50));

sum = (x, y) => x + y;

console.log(sum(30, 20));

const sayHelloAgain = (name) => "Hello " + name;

// function (name){
//     return "Hello " + name;
// }

console.log(sayHelloAgain("Virendra"));
console.log(sayHelloAgain("Sandeep"));

function fetchData(callback) {
  console.log("fetching data..");
  callback();
}

fetchData(() => {
  console.log("from arrow funtion callbackl");
});
