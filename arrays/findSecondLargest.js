/**
 * Finds the second largest unique number in an array.
 * @param {number[]} arr
 * @returns {number|null}
 */
function findSecondLargest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return null;
  }

  const unique = [...new Set(arr)].sort((a, b) => b - a);

  return unique.length < 2 ? null : unique[1];
}

console.log(findSecondLargest([10, 10, 5]));
console.log(findSecondLargest([42]));
console.log(findSecondLargest([]));