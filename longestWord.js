function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord("JavaScript utilities are useful"));