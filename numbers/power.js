function power(base, exponent) {
  if (!Number.isFinite(base) || !Number.isInteger(exponent)) {
    throw new TypeError("Base must be a number and exponent must be an integer.");
  }

  return base ** exponent;
}

console.log(power(2, 5));
console.log(power(3, 3));