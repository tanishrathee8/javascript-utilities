function replaceCharacters(str, search, replacement) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return str.split(search).join(replacement);
}

console.log(replaceCharacters("hello world", " ", "-"));
console.log(replaceCharacters("javascript is fun", " ", "_"));