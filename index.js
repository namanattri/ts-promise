let MyPromise = require('./lib/MyPromise').default;

let promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('hello'), 5 * 1000);
});

promise1.then(value => {
  console.log("promise resolved with value: "+ value);
});

promise1.then(value => {
  console.log("promise resolved with value: "+ value);

  return "second";
}).then(value => {
  console.log("chained with value: " + value);

  throw new Error("Chained error");
}).then(value => {
  console.log("Last then.");
}, reason => {
  console.log("Caught error: " + reason.message);
});

promise1.then(value => {
  console.log("promise resolved with value: "+ value);
});