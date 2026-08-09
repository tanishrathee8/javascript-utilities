function findMode(arr) {
  const frequency = {};
  let mode = arr[0];
  let maxCount = 0;

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mode = num;
    }
  }

  return mode;
}

console.log(findMode([1, 2, 2, 3, 4, 2, 5]));
console.log(findMode([5]));