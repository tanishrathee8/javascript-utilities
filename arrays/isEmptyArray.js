function isEmptyArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return arr.length === 0;
}

console.log(isEmptyArray([]));
console.log(isEmptyArray([1, 2, 3]));