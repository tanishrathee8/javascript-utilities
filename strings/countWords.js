function countWords(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return 0;
  }

  const words = str
    .trim()
    .replace(/[.,!?;:]+/g, "")
    .split(/\s+/);

  return words.length;
}

console.log(countWords("Hello, JavaScript! How are you?"));