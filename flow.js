import { Catch } from "./catch.js";

const { catchSync, catchAsync } = Catch();

const AsyncMap =
  (fns) =>
  async (...args) => {
    return await fns.reduce(async (acc, fn, idx) => {
      const res = await catchAsync(fn)(...args[idx]);
      return res;
    }, []);
  };

const CatchFlow =
  (...fns) =>
  (val) => {
    fns.reduce(async (prev, fn) => catchSync(fn)(prev), val);
  };

export const Flow = () => ({
  catchMap: AsyncMap,
  catchFlow: CatchFlow
});
