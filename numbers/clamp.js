function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(15, 1, 10));
console.log(clamp(-5, 1, 10));
console.log(clamp(7, 1, 10));