function isAlphabetic(str) {
  return /^[A-Za-z]+$/.test(str);
}

console.log(isAlphabetic("JavaScript"));
console.log(isAlphabetic("Java123"));