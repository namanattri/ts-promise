"use strict";

import MyPromise from "./MyPromise";

// 1.2 “thenable” is an object or function that defines a then method.
export default interface Thenable {

  then(onFulfilled: any, onRejected: any): MyPromise;

}
