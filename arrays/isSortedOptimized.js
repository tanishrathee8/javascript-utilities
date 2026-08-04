function isSortedOptimized(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isSortedOptimized([1, 2, 3, 4, 5]));
console.log(isSortedOptimized([1, 3, 2, 4]));