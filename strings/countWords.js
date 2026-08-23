function countWords(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return 0;
  }

  return str.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is fun to learn"));