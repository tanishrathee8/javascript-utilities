function hasMinLength(str, minLength) {
  if (typeof str !== "string") {
    return false;
  }

  return str.trim().length >= minLength;
}

console.log(hasMinLength("JavaScript", 8));
console.log(hasMinLength("JS", 5));