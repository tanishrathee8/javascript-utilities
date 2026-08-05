function toCamelCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(toCamelCase("hello world"));
console.log(toCamelCase("user_profile_name"));