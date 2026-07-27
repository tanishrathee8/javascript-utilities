function removeExtraSpaces(text) {
  return text.trim().replace(/\s+/g, " ");
}

console.log(removeExtraSpaces("   JavaScript     Utility    Library   "));