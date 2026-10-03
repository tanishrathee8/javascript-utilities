function isValidJSON(value) {
  if (typeof value !== "string") {
    return false;
  }

  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('{"name":"Tanish"}'));
console.log(isValidJSON("{invalid}"));