function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));