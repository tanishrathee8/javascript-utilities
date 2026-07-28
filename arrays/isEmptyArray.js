function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

console.log(isEmptyArray([]));
console.log(isEmptyArray([1, 2, 3]));