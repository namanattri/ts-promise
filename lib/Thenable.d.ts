import MyPromise from "./MyPromise";
export default interface Thenable {
    then(onFulfilled: any, onRejected: any): MyPromise;
}
