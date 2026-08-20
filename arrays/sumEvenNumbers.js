function sumEvenNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return arr
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));