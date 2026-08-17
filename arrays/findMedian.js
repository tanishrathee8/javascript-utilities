function findMedian(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  if (!arr.every(num => typeof num === "number" && Number.isFinite(num))) {
    throw new TypeError("Array must contain only finite numbers.");
  }

  const sorted = [...arr].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

console.log(findMedian([5, 2, 8, 1, 4]));
console.log(findMedian([1, 2, 3, 4]));
console.log(findMedian([10]));
console.log(findMedian([]));