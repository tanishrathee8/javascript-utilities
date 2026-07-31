function findMinimumNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  return Math.min(...arr);
}

console.log(findMinimumNumber([8, 4, 12, 2, 15]));