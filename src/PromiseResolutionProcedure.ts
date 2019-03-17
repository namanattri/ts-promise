"use strict";

import MyPromise from "./MyPromise";
import { PromiseState } from "./PromiseState";

export default class PromiseResolutionProcedure {

  // promise resolution process as per specification
  public static resolve(promise: MyPromise, x: any) {

    if (promise === x) {
      // 2.3.1. If promise and x refer to the same object,
      //   reject promise with a TypeError as the reason.
      promise.reject(new TypeError("promise and x refer to the same object"));
    } else if (x instanceof MyPromise) {
      // 2.3.2 If x is a promise
      if (x.state === PromiseState.PENDING) {
        // 2.3.2.1 If x is pending, promise must remain pending until x is fulfilled or rejected.
        x.then((val: any) => {
          // 2.3.2.2 If/when x is fulfilled, fulfill promise with the same value.
          PromiseResolutionProcedure.resolve(promise, val);
        }, (reason: any) => {
          // 2.3.2.3 If/when x is rejected, reject promise with the same reason
          promise.reject(reason);
        });
      } else {
        // adopt it's state
        promise.adoptStateOf(x);
      }
    } else if (x && (typeof x === "object" || typeof x === "function")) {
      // 2.3.3. Otherwise, if x is an object or function
      /** @todo */
    } else {
      // 2.3.4. If x is not an object or function, fulfill promise with x.
      /** @todo */
    }
  }

}
