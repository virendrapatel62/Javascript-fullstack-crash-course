// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

function sayHello() {
  console.log("Hello World..");
}

sayHello();

function sumWithoutInput() {
  const x = 23;
  const y = 43;
  const ans = x + y;
  console.log(ans);
}

function sumWithInput(x, y) {
  const ans = x + y;
  console.log(ans);
}

function sumWithInputAndReturn(x, y) {
  const ans = x + y;
  return ans;
}

sumWithoutInput();
sumWithInput(12, 43);
const ans = sumWithInputAndReturn(12, 14);

console.log(ans);
