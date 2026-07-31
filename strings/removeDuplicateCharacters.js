function removeDuplicateCharacters(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicateCharacters("programming"));
console.log(removeDuplicateCharacters("javascript"));