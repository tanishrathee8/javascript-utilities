function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + "...";
}

console.log(truncateString("JavaScript Utility Library", 10));