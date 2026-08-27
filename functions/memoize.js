function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);

    cache.set(key, result);

    return result;
  };
}

const slowAdd = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const add = memoize(slowAdd);

console.log(add(5, 10));
console.log(add(5, 10));