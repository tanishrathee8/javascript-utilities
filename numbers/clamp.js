function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(150, 0, 100));
console.log(clamp(-10, 0, 100));