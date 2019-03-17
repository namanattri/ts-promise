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
      let isResolvePromiseOrRejectPromiseHaveBeenCalled = false;
      try {
        // 2.3.3.1. Let then be x.then
        const then = x.then;
        if (then && typeof then === "function") {
          // 2.3.3.3. If then is a function, call it with x as this,
          //   first argument resolvePromise, and second argument rejectPromise, where:
          // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)
          then.call(x,
            // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)
            (y: any) => {
              if (!isResolvePromiseOrRejectPromiseHaveBeenCalled) {
                PromiseResolutionProcedure.resolve(promise, y);
                isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
              }
            },
            // 2.3.3.3.2. If/when rejectPromise is called with a reason r, reject promise with r
            (r: any) => {
              if (!isResolvePromiseOrRejectPromiseHaveBeenCalled) {
                promise.reject(r);
                isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
              }
            });
        } else {
          // 2.3.3.4. If then is not a function, fulfill promise with x.
          promise.fulfill(x);
          isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
        }
      } catch (e) {
        // 2.3.3.2. If retrieving the property x.then results in a thrown exception e,
        //     reject promise with e as the reason.
        // 2.3.3.3.4. If calling then throws an exception e
        if (!isResolvePromiseOrRejectPromiseHaveBeenCalled) {
          promise.reject(e);
          isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
        }
        // 2.3.3.3.4.1 If resolvePromise or rejectPromise have been called, ignore it.
      }
    } else {
      // 2.3.4. If x is not an object or function, fulfill promise with x.
      promise.fulfill(x);
    }
  }

}
