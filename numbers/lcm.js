function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return Math.abs(a);
}

function lcm(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError("Inputs must be integers.");
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(12, 18));