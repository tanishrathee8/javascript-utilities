function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return sentence.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("JavaScript is fun"));