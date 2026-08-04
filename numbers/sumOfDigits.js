function sumOfDigits(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("Input must be an integer.");
  }

  return Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(12345));
console.log(sumOfDigits(-987));