function sendEmail() {
  console.log("Email sending...");
}

function doSomething() {
  console.log("Doing something");
}

function placeOrder(product, callback) {
  console.log("Order is placing for product", product);
  callback();
}

placeOrder("Laptop", doSomething);
placeOrder("Phone", sendEmail);
