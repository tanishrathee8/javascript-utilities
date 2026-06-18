function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargestNumber([5, 12, 8, 20, 3]));
console.log(findLargestNumber([100, 45, 67, 89]));