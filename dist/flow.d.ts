import { MutantFunction } from "./catch.js";
declare const catchMap: (fns: any[]) => (...args: any) => Promise<any>;
declare const catchFlow: (...fns: MutantFunction[]) => (val: any) => any;
export { catchMap, catchFlow };
