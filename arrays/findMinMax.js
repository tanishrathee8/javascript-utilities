function findMinMax(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  if (arr.length === 0) {
    return null;
  }

  if (!arr.every(item => typeof item === "number")) {
    throw new TypeError("Array must contain only numbers.");
  }

  let min = arr[0];
  let max = arr[0];

  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return { min, max };
}

console.log(findMinMax([8, 2, 15, 4, 9]));