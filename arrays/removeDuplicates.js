function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates(["a", "b", "a", "c"]));