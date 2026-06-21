function isAnagram(str1, str2) {
  const formatted1 = str1.toLowerCase().split("").sort().join("");
  const formatted2 = str2.toLowerCase().split("").sort().join("");

  return formatted1 === formatted2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));