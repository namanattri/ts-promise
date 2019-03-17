"use strict";

import MyPromise from "./MyPromise";

export default class PromiseResolutionProcedure {

  // promise resolution process as per specification
  public static resolve(promise: MyPromise, x: any) {

    if (promise === x) {
      // 2.3.1. If promise and x refer to the same object,
      //   reject promise with a TypeError as the reason.
      promise.reject(new TypeError("promise and x refer to the same object"));
    } else if (x instanceof MyPromise) {
      // 2.3.2 If x is a promise
      /** @todo */
    } else if (x && (typeof x === "object" || typeof x === "function")) {
      // 2.3.3. Otherwise, if x is an object or function
      /** @todo */
    } else {
      // 2.3.4. If x is not an object or function, fulfill promise with x.
      /** @todo */
    }
  }

}
