const TryCatch =
  (fn) =>
  (...fnArgs) => {
    try {
      return fn(...fnArgs);
    } catch (err) {
      const funk = fn.toString();

      typeof funk === "string"
        ? console.error(
            `||| Error @ wrapped function: |||\n:::\n${fn.toString()}\n:::\n`,
            err
          )
        : console.error(`||| Unable to stringify function signature |||`, err);
    }
  };

const AsyncTryCatch = async (fn, ...fnArgs) => {
  try {
    return await fn(...fnArgs);
  } catch (err) {
    const funk = fn.toString();

    typeof funk === "string"
      ? console.error(
          `||| Error @ wrapped function: |||\n:::\n${fn.toString()}\n:::\n`,
          err
        )
      : console.error(`||| Unable to stringify function signature |||`, err);
  }
};

// /**
//  *
//  * @param {Function} fn function to be try-catch wrapped
//  * @param {any} fnArgs arguments to wrapped function
//  * @returns
//  */
export const Sync = (fn) => (fnArgs) => TryCatch(fn)(fnArgs);

// /**
//  *
//  * @param {Function} promiseFn function to be wrapped
//  * @param {any} fnArgs arguments to promise function
//  * @returns {Promise}
//  */
export const Async = (promiseFn) => async (fnArgs) =>
  await AsyncTryCatch(promiseFn, fnArgs);

export const Catch = () => ({
  catchSync: Catch,
  catchAsync: Async
});
