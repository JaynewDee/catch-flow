# **Catch-Flow**

> > > A simple, lightweight library offering iterable try-catch decorators.

## catchSync

```javascript
// Wrap any pre-existing function with a catch-flow decorator:
const myNormalFunction = (start, end) => {
  if (start > end) throw Error("What have you done?!");
  if (start === end) return;
  console.log(start);
  return myNormalFunction(start + 1, end);
};

const catchFlowFunc = catchSync(myNormalFunction);
// Pass arguments the same
catchFlowFunc(3, 9);

// Catches and prints error
catchFlowFunc(9, 3);
```

## catchAsync

```javascript

```

## catchMap - Async

```javascript
const stepOne = async (msg) => setTimeout(() => log(msg), 1000);
const stepTwo = async (msg) => setTimeout(() => log(msg), 1500);
const stepThree = async (msg) => setTimeout(() => log(msg), 3000);
const stepFour = async (...msgs) =>
  setTimeout(() => msgs.forEach((msg) => log(msg)), 5000);
const stepFive = async () => setTimeout(() => log("Sincerely"), 6000);

const funks = [stepOne, stepTwo, stepThree, stepFour, stepFive];
// Build custom async-catch function by passing array of functions to decorator:
const messageMap = catchMap(funks);
// === Each function takes it's arguments as an array, in the left-to-right order of the functions passed.
// === Note that one must pass an empty array for a function without arguments:
await messageMap(["Come"], ["home,"], ["please."], ["I", "miss", "you"], []);
// -> Promises are returned in the order that they are resolved.
// -> Errors are thrown in the order that they are caught.
```

## catchFlow - Sync

```javascript

```
