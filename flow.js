import { Sync as catchSync, Async as catchAsync } from "./catch.js";

const catchMap =
  (fns) =>
  async (...args) => {
    return await fns.reduce(async (acc, fn, idx) => {
      const res = await catchAsync(fn)(...args[idx]);
      return res;
    }, []);
  };

const catchFlow =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => catchSync(fn)(prev), val);

export { catchMap, catchFlow };
