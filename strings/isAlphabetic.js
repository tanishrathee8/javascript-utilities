function isAlphabetic(str) {
  if (typeof str !== "string" || str.length === 0) {
    return false;
  }

  return /^[A-Za-z]+$/.test(str);
}

console.log(isAlphabetic("JavaScript"));
console.log(isAlphabetic("Java123"));
console.log(isAlphabetic(""));