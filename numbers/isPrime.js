function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17));
console.log(isPrime(18));
console.log(isPrime(2));