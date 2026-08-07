function startsWithVowel(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return false;
  }

  return /^[aeiou]/i.test(str.trim());
}

console.log(startsWithVowel("Apple"));
console.log(startsWithVowel("Banana"));