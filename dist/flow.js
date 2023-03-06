var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Sync as catchSync, Async as catchAsync } from "./catch.js";
const catchMap = (fns) => (...args) => __awaiter(void 0, void 0, void 0, function* () {
    return fns.reduce((_, fn, idx) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield catchAsync(fn)(...args[idx]);
        return res;
    }), []);
});
const catchFlow = (...fns) => (val) => fns.reduce((prev, fn) => catchSync(fn)(prev), val);
export { catchMap, catchFlow };
