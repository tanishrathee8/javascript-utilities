function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }

    return result;
  };
}

const initialize = once(() => {
  console.log("Initialized");
  return true;
});

console.log(initialize());
console.log(initialize());