function endsWithVowel(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return false;
  }

  return /[aeiou]$/i.test(str.trim());
}

console.log(endsWithVowel("JavaScript"));
console.log(endsWithVowel("Hello"));