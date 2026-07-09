function repeatString(str, count) {
  if (count < 0) {
    throw new Error("Count cannot be negative.");
  }

  return str.repeat(count);
}

console.log(repeatString("JS ", 3));