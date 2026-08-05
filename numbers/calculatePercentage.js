function calculatePercentage(value, total) {
  if (total === 0) {
    throw new Error("Total cannot be zero.");
  }

  return ((value / total) * 100).toFixed(2) + "%";
}

console.log(calculatePercentage(45, 60));
console.log(calculatePercentage(75, 150));