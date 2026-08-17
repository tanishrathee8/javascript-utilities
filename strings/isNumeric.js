function isNumeric(str) {
  if (typeof str !== "string") {
    return false;
  }

  const value = str.trim();

  if (value === "") {
    return false;
  }

  return /^\d+$/.test(value);
}

console.log(isNumeric("12345"));
console.log(isNumeric("123abc"));
console.log(isNumeric(" 456 "));