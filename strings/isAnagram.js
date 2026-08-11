function isAnagram(str1, str2) {
  const normalize = str =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));