let MyPromise = require('./lib/MyPromise').default;

console.log("promise 1");
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

// implementation of catch method
// neater promise implementation similar to native promises

console.log("promise 2");

let promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => reject(new Error("Some Error")), 10 * 1000);
});

promise2.then(value => {
  console.log("Promise2 resolved");
}).catch(err => {
  console.log("Error caught: " + err.message);
});