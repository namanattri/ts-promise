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

  /**
   * 2.1.1. When pending, a promise:
   *   2.1.1.1. may transition to either the fulfilled or rejected state.
   * 2.1.2. When fulfilled, a promise:
   *   2.1.2.1. must not transition to any other state.
   *   2.1.2.2. must have a value, which must not change.
   * 2.1.3. When rejected, a promise:
   *   2.1.3.1. must not transition to any other state.
   *   2.1.3.2. must have a reason, which must not change.
   *
   * @param state state to transition to
   * @param value value passed with the transition for
   */
  public transitionState(state: PromiseState, value: any): void {

    if (this.state === state || this.state !== PromiseState.PENDING) {
      // if the current state is same as the state being transitioned to
      // or the promise is not currently in pending state
      // do nothing
      return;
    }

    this.value = value;
    this.state = state;

    /** @todo ripple state transition effect */
  }

}
