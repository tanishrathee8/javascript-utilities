function calculatePercentage(value, total) {
  if (!Number.isFinite(value) || !Number.isFinite(total) || total === 0) {
    throw new TypeError("Value and total must be valid numbers.");
  }

  return (value / total) * 100;
}

console.log(calculatePercentage(45, 60));