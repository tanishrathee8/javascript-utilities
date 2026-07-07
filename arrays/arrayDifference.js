function arrayDifference(arr1, arr2) {
  const second = new Set(arr2);

  return arr1.filter(item => !second.has(item));
}

console.log(arrayDifference([1, 2, 3, 4], [2, 4]));