function factorialIterative(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new TypeError("Input must be a non-negative integer.");
  }

  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialIterative(5));