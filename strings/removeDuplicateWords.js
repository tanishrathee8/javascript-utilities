function removeDuplicateWords(sentence) {
  return [...new Set(sentence.split(/\s+/))].join(" ");
}

console.log(removeDuplicateWords("hello hello world world javascript"));