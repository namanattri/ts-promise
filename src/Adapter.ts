"use strict";

import MyPromise from "./MyPromise";

// as per requirement for Promises/A+ Compliance Test Suite
// export minimal adapter interface

// resolved(value): creates a promise that is resolved with value.
export function resolved(value: any) {
  return new MyPromise((resolve: CallableFunction, reject: CallableFunction|null|undefined) => resolve(value));
}

// rejected(reason): creates a promise that is already rejected with reason.
export function rejected(reason: Error|any) {
  return new MyPromise((resolve: CallableFunction|null|undefined, reject: CallableFunction) => reject(reason));
}

// deferred(): creates an object consisting of { promise, resolve, reject }:
export function deferred() {
  // resolve(value) resolves the promise with value.
  let resolve: CallableFunction|null|undefined;

  // reject(reason) moves the promise from the pending state to the rejected state, with rejection reason reason.
  let reject: CallableFunction|null|undefined;

  //promise is a promise that is currently in the pending state.
  const promise: MyPromise = new MyPromise(
    (rslv: CallableFunction|null|undefined, rjct: CallableFunction|null|undefined) => {
      resolve = rslv; // mapped to return in the object
      reject = rjct; // mapped to return in the object
    },
  );

  return { promise, resolve, reject };
}
