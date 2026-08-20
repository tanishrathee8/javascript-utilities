function compoundInterest(principal, rate, years) {
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(years)
  ) {
    throw new TypeError("Inputs must be valid numbers.");
  }

  return principal * (1 + rate / 100) ** years;
}

console.log(compoundInterest(1000, 5, 2));