import { Catch } from "./catch.js";

const { catchSync, catchAsync } = Catch;

const Sync = (fns) => fns.map((fn) => catchSync(fn));
const Async = (fns) => fns.map(async (fn) => await catchAsync(fn));

export const Flow = () => ({
  syncFlow: Sync,
  asyncFlow: Async
});
