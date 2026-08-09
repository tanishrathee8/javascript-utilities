/**
 * Calculates the greatest common divisor of two integers.
 */
function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError("Inputs must be integers.");
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

console.log(gcd(24, 18));
console.log(gcd(-24, 18));
console.log(gcd(0, 12));