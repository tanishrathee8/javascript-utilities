function findLargestNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("Array must contain only numbers.");
    }

    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example Usage
console.log(findLargestNumber([5, 12, 8, 20, 3]));      // 20
console.log(findLargestNumber([-10, -4, -7]));          // -4
console.log(findLargestNumber([100]));                  // 100