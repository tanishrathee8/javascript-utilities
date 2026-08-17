function isLengthInRange(str, min, max) {
  if (typeof str !== "string") {
    return false;
  }

  const length = str.trim().length;

  return length >= min && length <= max;
}

console.log(isLengthInRange("JavaScript", 5, 15));
console.log(isLengthInRange("JS", 5, 15));