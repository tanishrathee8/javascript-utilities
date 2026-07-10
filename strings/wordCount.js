function wordCount(sentence) {
  if (!sentence.trim()) {
    return 0;
  }

  return sentence.trim().split(/\s+/).length;
}

console.log(wordCount("JavaScript utilities are awesome"));
console.log(wordCount("   Hello   World   "));