function simpleInterest(principal, rate, time) {
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(time)
  ) {
    throw new TypeError("Inputs must be valid numbers.");
  }

  return (principal * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2));