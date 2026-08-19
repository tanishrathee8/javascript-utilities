function minutesToTime(totalMinutes) {
  if (!Number.isInteger(totalMinutes) || totalMinutes < 0) {
    throw new TypeError("Input must be a non-negative integer.");
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
}

console.log(minutesToTime(135));
console.log(minutesToTime(45));