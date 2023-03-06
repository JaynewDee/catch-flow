import {
  Sync as catchSync,
  Async as catchAsync,
  MutantFunction,
  MutantPromise
} from "./catch.js";

const catchMap =
  (fns: any[]) =>
  async (...args: any) => {
    return fns.reduce(async (_: any, fn: MutantPromise, idx: number) => {
      const res = await catchAsync(fn)(...args[idx]);
      return res;
    }, []);
  };

const catchFlow =
  (...fns: MutantFunction[]) =>
  (val: any) =>
    fns.reduce((prev, fn) => catchSync(fn)(prev), val);

export { catchMap, catchFlow };
