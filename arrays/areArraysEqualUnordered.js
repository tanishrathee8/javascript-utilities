function areArraysEqualUnordered(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Both inputs must be arrays.");
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();

  return sorted1.every((value, index) => value === sorted2[index]);
}

console.log(areArraysEqualUnordered([3, 1, 2], [2, 3, 1]));
console.log(areArraysEqualUnordered([1, 2], [1, 2, 3]));