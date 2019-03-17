"use strict";

import Thenable from "./Thenable";
import { PromiseState } from "./PromiseState";

// 1.1. “promise” is an object or function with a then method whose behavior conforms to the Promises/A+ specification.
export default class MyPromise implements Thenable {

  private value: any;
  private state: PromiseState;

  constructor(executor: CallableFunction|any = null) {
    this.value = null; // default promise value as null
    this.state = PromiseState.PENDING; // default promise state as pending
  }

  public then(onFulfilled: any, onRejected: any): MyPromise {
    throw new Error("Method not implemented.");
  }

}
