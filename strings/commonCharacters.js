function commonCharacters(str1, str2) {
  const chars = new Set(str2);

  return [...new Set(str1)].filter(char => chars.has(char));
}

console.log(commonCharacters("javascript", "java"));