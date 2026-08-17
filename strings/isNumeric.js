function isNumeric(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return false;
  }

  return /^\d+$/.test(str.trim());
}

console.log(isNumeric("12345"));
console.log(isNumeric("123abc"));