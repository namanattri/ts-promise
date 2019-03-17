"use strict";

import Thenable from "./Thenable";

// 1.1. “promise” is an object or function with a then method whose behavior conforms to the Promises/A+ specification.
export default class MyPromise implements Thenable {

  constructor(executor: CallableFunction|any = null) {

  }

  then(onFulfilled: any, onRejected: any): MyPromise {
    throw new Error("Method not implemented.");
  }
  
}