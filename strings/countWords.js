function countWords(text) {
  if (text.trim() === "") {
    return 0;
  }

  return text.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is fun to learn"));