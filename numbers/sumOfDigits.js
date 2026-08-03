function sumOfDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(12345));
console.log(sumOfDigits(-987));