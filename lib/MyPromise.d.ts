import Thenable from "./Thenable";
export default class MyPromise implements Thenable {
    constructor(executor?: CallableFunction | any);
    then(onFulfilled: any, onRejected: any): MyPromise;
}
