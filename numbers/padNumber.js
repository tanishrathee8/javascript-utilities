function padNumber(number, length) {
  if (!Number.isInteger(length) || length < 0) {
    throw new Error("Length must be a non-negative integer.");
  }

  return String(number).padStart(length, "0");
}

console.log(padNumber(7, 3));
console.log(padNumber(125, 5));