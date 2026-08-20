function removePunctuation(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return str.replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-]/g, "");
}

console.log(removePunctuation("Hello, JavaScript!"));