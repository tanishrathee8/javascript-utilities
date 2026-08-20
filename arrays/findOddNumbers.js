function findOddNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return arr.filter(num => num % 2 !== 0);
}

console.log(findOddNumbers([1, 2, 3, 4, 5, 6, 7]));
console.log(findOddNumbers([]));
console.log(findOddNumbers([2, 4, 6, 8]));