var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const logError = (func, error) => {
    const funk = func.toString();
    typeof funk === "string"
        ? console.log(`||| Error @ wrapped function: |||\n:::\n${funk}\n:::\n`, error)
        : console.error(`||| Unable to stringify function signature |||`, error);
    return error;
};
const TryCatch = (fn) => (...fnArgs) => {
    try {
        return fn(...fnArgs);
    }
    catch (err) {
        logError(fn, err);
    }
};
const AsyncTryCatch = (fn) => (...fnArgs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield fn(...fnArgs);
    }
    catch (err) {
        logError(fn, err);
    }
});
const Sync = (fn) => (...fnArgs) => TryCatch(fn)(...fnArgs);
const Async = (promiseFn) => (...fnArgs) => __awaiter(void 0, void 0, void 0, function* () { return yield AsyncTryCatch(promiseFn)(...fnArgs); });
export { Sync, Async };
