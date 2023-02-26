# _**Catch-Flow**_

> > > A simple, lightweight library offering iterable try-catch decorators.

`npm install catch-flow`

```javascript
import cf from "catch-flow";
const { catchSync, catchAsync, catchMap, catchFlow } = cf;
```

> _Note:_ catch-flow does not currently support commonJS require()

---

---

---

## _catchSync_

Wrap any pre-existing synchronous function with a catch decorator:

> ```javascript
> const myNormalFunction = (start, end) => {
>   if (start > end) throw Error("What have you done?!");
>   if (start === end) return;
>   console.log(start);
>   return myNormalFunction(start + 1, end);
> };
> const catchFlowFunc = catchSync(myNormalFunction);
> // Pass arguments the same
> catchFlowFunc(3, 9);
>
> // Catches and prints error
> catchFlowFunc(9, 3);
> ```

Or wrap and define at once:

> ```javascript
> const myFunctionWrapped = catchSync((start, end) => {
>   if (start > end) throw Error("What have you done?!");
>   if (start === end) return;
>   console.log(start);
>   return myFunctionWrapped(start + 1, end);
> });
>
> myFunctionWrapped(3, 19);
> ```

---

## _catchAsync_

> > > ### _**catchAsync**_ wraps a Promise-returning function. This is it's only functional difference from catchSync.

> ```javascript
> const asyncJob = catchAsync(
>   (msg) =>
>     new Promise((resolve, reject) => {
>       resolve(`Echo: ${msg}`);
>       if (!msg) {
>         reject("Promise rejected.");
>       }
>     })
> );
>
> const res = await asyncJob("echo echo ... ");
> console.log(res);
>
> const rejected = await asyncJob("");
> console.log(rejected);
> ```

---

## _catchMap_ - Async

> > > ### _**catchMap**_ is functionally similar to `Promise.all`, but wraps every promise in a try-catch block

```javascript
// Simulate some promises:
// ===
const stepOne = async (msg) => setTimeout(() => log(msg), 1000);
const stepTwo = async (msg) => setTimeout(() => log(msg), 1500);
const stepThree = async (msg) => setTimeout(() => log(msg), 3000);
const stepFour = async (...msgs) =>
  setTimeout(() => msgs.forEach((msg) => log(msg)), 5000);
const stepFive = async () => setTimeout(() => log("Sincerely"), 6000);
// ===

const funks = [stepOne, stepTwo, stepThree, stepFour, stepFive];
// Build custom async-catch function by passing array of functions to decorator:
const messageMap = catchMap(funks);

// === Each function takes it's arguments as an array, in the left-to-right order of the functions passed.
// === Note that one must pass an empty array for a function without arguments:
await messageMap(["Come"], ["home,"], ["please."], ["I", "miss", "you"], []);
==================
// -> Promises are returned in the order that they are resolved.
// -> Errors are thrown in the order that they are caught.
==================
```

---

## _catchFlow_ - Sync

```javascript

```
