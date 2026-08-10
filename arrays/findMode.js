function findMode(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const frequency = {};
  let mode = arr[0];
  let maxCount = 0;

  for (const value of arr) {
    frequency[value] = (frequency[value] || 0) + 1;

    if (frequency[value] > maxCount) {
      maxCount = frequency[value];
      mode = value;
    }
  }

  return mode;
}

console.log(findMode([1, 2, 2, 3, 2, 4]));
console.log(findMode([]));