declare type resolver = (x?: any) => any;
interface Thenable {
    then(resolve: resolver, reject?: resolver): Thenable;
    catch(reject: resolver): Thenable;
}
export declare function isThenable(val: any): val is Thenable;
export declare function toThenable(val: IterableIterator<any> | Thenable | any): Thenable;
export declare function toValue(val: IterableIterator<any> | Thenable | any): any;
export {};
