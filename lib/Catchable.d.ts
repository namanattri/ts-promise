import MyPromise from "./MyPromise";
export default interface Catchable {
    catch(onRejected: any): MyPromise;
}
