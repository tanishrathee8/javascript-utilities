function isPalindrome(str) {
  const cleaned = str.toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
