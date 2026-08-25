function arrayDifference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Both inputs must be arrays.");
  }

  const secondArray = new Set(arr2);

  return [...new Set(arr1)].filter(value => !secondArray.has(value));
}

console.log(arrayDifference([1, 2, 2, 3, 4], [2, 4]));
console.log(arrayDifference([], [1, 2]));