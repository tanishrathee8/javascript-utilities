function isPerfectNumber(number) {
  if (!Number.isInteger(number) || number <= 1) {
    return false;
  }

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sum += i;

      if (i !== number / i) {
        sum += number / i;
      }
    }
  }

  return sum === number;
}

console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));