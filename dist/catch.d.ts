export declare type MutantFunction = (...args: any) => any;
declare const Sync: (fn: MutantFunction) => (...fnArgs: any) => any;
export declare type MutantPromise = (...args: any) => Promise<any>;
declare const Async: (promiseFn: MutantPromise) => (...fnArgs: any) => Promise<any>;
export { Sync, Async };
