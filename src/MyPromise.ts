"use strict";

import PromiseResolutionProcedure from "./PromiseResolutionProcedure";
import { PromiseState } from "./PromiseState";
import Thenable from "./Thenable";

// 1.1. “promise” is an object or function with a then method whose behavior conforms to the Promises/A+ specification.
export default class MyPromise implements Thenable {

  // instance variables

  private value: any;
  private STATE: PromiseState;

  private onFulfilledHandler: CallableFunction;
  private onRejectedHandler: CallableFunction;

  private promiseSettlementQueue: MyPromise[];

  // getters & setters

  get state(): PromiseState {
    return this.STATE;
  }

  constructor(executor: CallableFunction|any = null) {
    this.value = null; // default promise value as null
    this.STATE = PromiseState.PENDING; // default promise state as pending

    // register default handlers for promise on fulfillment and rejection
    this.onFulfilledHandler = (value: any) => value;
    this.onRejectedHandler = (reason: Error|any) => { throw reason; };

    // create an empty promise settlement queue for promises generated by then calls
    this.promiseSettlementQueue = [];

    // bind executor resolve reject callbacks
    if (executor) {
      executor((value: any) => {
        PromiseResolutionProcedure.resolve(this, value);
      }, (reason: any) => {
        this.reject(reason);
      });
    }
  }

  /**
   * 2.2.1 Both onFulfilled and onRejected are optional arguments:
   *
   * @param onFulfilled
   * @param onRejected
   */
  public then(onFulfilled: any, onRejected: any): MyPromise {
    // create a new promise to be returned by then for promise chaining
    const promise: MyPromise = new MyPromise();

    // 2.2.1.1 If onFulfilled is not a function, it must be ignored.
    if (typeof onFulfilled === "function") {
      promise.onFulfilledHandler = onFulfilled;
    }

    // 2.2.1.2 If onRejected is not a function, it must be ignored.
    if (typeof onRejected === "function") {
      promise.onFulfilledHandler = onRejected;
    }

    /**
     * 2.2.6. then may be called multiple times on the same promise.
     *   2.2.6.1. If/when promise is fulfilled, all respective onFulfilled
     *     callbacks must execute in the order of their originating calls to then.
     *   2.2.6.2. If/when promise is rejected, all respective onRejected
     *     callbacks must execute in the order of their originating calls to then.
     */
    this.promiseSettlementQueue.push(promise);
    this.processRegisteredHandlers();

    // 2.2.7. then must return a promise
    return promise;
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

    if (this.STATE === state || this.STATE !== PromiseState.PENDING) {
      // if the current state is same as the state being transitioned to
      // or the promise is not currently in pending state
      // do nothing
      return;
    }

    this.value = value;
    this.STATE = state;

    this.processRegisteredHandlers();
  }

  /**
   * fulfill
   * @param value any value
   */
  public fulfill(value: any): void {
    this.transitionState(PromiseState.FULFILLED, value);
  }

  /**
   * reject
   * @param reason can by anything but generally an instance of Error object
   */
  public reject(reason: Error|any): void {
    this.transitionState(PromiseState.REJECTED, reason);
  }

  /**
   * tries to adopt state of supplied promise
   * @param x Promise object, whose state the current promise instance will adopt
   */
  public adoptStateOf(x: MyPromise) {
    this.transitionState(x.state, x.value);
  }

  private processRegisteredHandlers(): void {
    if (this.STATE !== PromiseState.PENDING) {
      // 2.2.4 onFulfilled or onRejected must not be called
      // until the execution context stack contains only platform code.
      setTimeout(() => {

        // 2.2.7. then may be called multiple times on the same promise.
        //   2.2.6.1. If/when promise is fulfilled,
        //     all respective onFulfilled callbacks must execute in the
        //     order of their originating calls to then.
        //   2.2.6.2. If/when promise is rejected,
        //     all respective onRejected callbacks must execute in the
        //     order of their originating calls to then.
        // this is acheived by dequeue on FIFO data structure (i.e. queue)
        while (this.promiseSettlementQueue.length) {
          // dequeue
          const promise: MyPromise|any = this.promiseSettlementQueue.shift();

          try {
            // 2.2.5. onFulfilled and onRejected must be called as functions (i.e. with no this value).
            const value = (
              this.STATE === PromiseState.FULFILLED ? promise.onFulfilled : promise.onRejected
            )(this.value);
            // 2.2.7.1. If either onFulfilled or onRejected returns a value x,
            // run the Promise Resolution Procedure [[Resolve]](promise2, x).
            PromiseResolutionProcedure.resolve(promise, value);
          } catch (e) {
            // 2.2.7.2. If either onFulfilled or onRejected throws an exception e,
            // promise2 must be rejected with e as the reason.
            promise.reject(e);
          }
        }
      }, 0);
    }
  }
}
