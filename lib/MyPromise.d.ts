import Thenable from "./Thenable";
export default class MyPromise implements Thenable {
    private value;
    private state;
    constructor(executor?: CallableFunction | any);
    then(onFulfilled: any, onRejected: any): MyPromise;
}
