function negate(fn) {
  return (...args) => !fn(...args);
}

const isEven = number => number % 2 === 0;
const isOdd = negate(isEven);

console.log(isOdd(5));
console.log(isOdd(8));