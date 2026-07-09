function findLargestNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  if (arr.length === 0) {
    return null;
  }

  if (!arr.every(num => typeof num === "number")) {
    throw new TypeError("Array must contain only numbers.");
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargestNumber([5, 9, 2, 14]));