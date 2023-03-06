export type MutantFunction = (...args: any) => any;

const logError = (func: MutantFunction, error: Error) => {
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
  (fn: MutantFunction) =>
  (...fnArgs: any) => {
    try {
      return fn(...fnArgs);
    } catch (err) {
      logError(fn, err as Error);
    }
  };

const AsyncTryCatch =
  (fn: MutantFunction) =>
  async (...fnArgs: any) => {
    try {
      return await fn(...fnArgs);
    } catch (err) {
      logError(fn, err as Error);
    }
  };

const Sync =
  (fn: MutantFunction) =>
  (...fnArgs: any) =>
    TryCatch(fn)(...fnArgs);

export type MutantPromise = (...args: any) => Promise<any>;

const Async =
  (promiseFn: MutantPromise) =>
  async (...fnArgs: any) =>
    await AsyncTryCatch(promiseFn)(...fnArgs);

export { Sync, Async };
