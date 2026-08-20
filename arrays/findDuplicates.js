function findDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  const seen = new Set();
  const duplicates = new Set();

  for (const value of arr) {
    if (seen.has(value)) {
      duplicates.add(value);
    } else {
      seen.add(value);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5]));
console.log(findDuplicates([]));