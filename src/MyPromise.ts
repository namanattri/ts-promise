"use strict";

import { PromiseState } from "./PromiseState";
import Thenable from "./Thenable";

// 1.1. “promise” is an object or function with a then method whose behavior conforms to the Promises/A+ specification.
export default class MyPromise implements Thenable {

  private value: any;
  private state: PromiseState;

  private onFulfilledHandler: CallableFunction;
  private onRejectedHandler: CallableFunction;

  constructor(executor: CallableFunction|any = null) {
    this.value = null; // default promise value as null
    this.state = PromiseState.PENDING; // default promise state as pending

    // register default handlers for promise on fulfillment and rejection
    this.onFulfilledHandler = (value: any) => value;
    this.onRejectedHandler = (reason: Error|any) => { throw reason; };

    // bind executor resolve reject callbacks
    if (executor) {
      executor((value: any) => {
        /** @todo Promise Resolution Procedure */
      }, (reason: any) => {
        /** @todo Promise Rejection Procedure */
      });
    }
  }

  public then(onFulfilled: any, onRejected: any): MyPromise {
    throw new Error("Method not implemented.");
  }

}
