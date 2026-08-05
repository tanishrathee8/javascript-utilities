function toKebabCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/-+/g, "-");
}

console.log(toKebabCase("Hello World"));
console.log(toKebabCase("user_profile_name"));