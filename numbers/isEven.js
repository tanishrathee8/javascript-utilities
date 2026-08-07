function isEven(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("Input must be an integer.");
  }

  return number % 2 === 0;
}

console.log(isEven(12));
console.log(isEven(17));