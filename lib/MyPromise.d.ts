import { PromiseState } from "./PromiseState";
import Thenable from "./Thenable";
export default class MyPromise implements Thenable {
    private value;
    private state;
    private onFulfilledHandler;
    private onRejectedHandler;
    private promiseSettlementQueue;
    constructor(executor?: CallableFunction | any);
    /**
     * 2.2.1 Both onFulfilled and onRejected are optional arguments:
     *
     * @param onFulfilled
     * @param onRejected
     */
    then(onFulfilled: any, onRejected: any): MyPromise;
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
    transitionState(state: PromiseState, value: any): void;
    private processRegisteredHandlers;
}
