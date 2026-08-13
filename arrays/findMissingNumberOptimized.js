function findMissingNumberOptimized(arr, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((sum, num) => sum + num, 0);

  return expected - actual;
}

console.log(findMissingNumberOptimized([1, 2, 3, 5], 5));