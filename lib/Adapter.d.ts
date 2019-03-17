import MyPromise from "./MyPromise";
export declare function resolved(value: any): MyPromise;
export declare function rejected(reason: Error | any): MyPromise;
export declare function deferred(): {
    promise: MyPromise;
    resolve: CallableFunction | null | undefined;
    reject: CallableFunction | null | undefined;
};
