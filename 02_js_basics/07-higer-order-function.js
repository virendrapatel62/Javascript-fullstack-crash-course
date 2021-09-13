function sayHello() {
  function hello() {
    console.log("Hello From inner function");
  }

  return hello;
}

const hello = sayHello();

hello();

function multiplyBy(number) {
  return function (number2) {
    return number * number2;
  };
}

const multiplyBy2 = multiplyBy(2);

console.log(multiplyBy2(3));
console.log(multiplyBy2(4));
console.log(multiplyBy2(6));

const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy5(3));
console.log(multiplyBy5(4));
console.log(multiplyBy5(6));
