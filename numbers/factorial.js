function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) { 
    // Calculates the factorial of a non-negative integer.
    result *= i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(7));