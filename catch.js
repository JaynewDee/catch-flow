const logError = (func, error) => {
  const funk = func.toString();

  typeof funk === "string"
    ? console.log(
        `||| Error @ wrapped function: |||\n:::\n${funk}\n:::\n`,
        error
      )
    : console.error(`||| Unable to stringify function signature |||`, error);
  return error;
};

const TryCatch =
  (fn) =>
  (...fnArgs) => {
    try {
      return fn(...fnArgs);
    } catch (err) {
      logError(fn, err);
    }
  };

const AsyncTryCatch =
  (fn) =>
  async (...fnArgs) => {
    try {
      return await fn(...fnArgs);
    } catch (err) {
      logError(fn, err);
    }
  };

const Sync =
  (fn) =>
  (...fnArgs) =>
    TryCatch(fn)(...fnArgs);

const Async =
  (promiseFn) =>
  async (...fnArgs) =>
    await AsyncTryCatch(promiseFn)(...fnArgs);

export { Sync, Async };
