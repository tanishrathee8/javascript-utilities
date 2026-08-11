function pickProperties(obj, keys) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be an object.");
  }

  if (!Array.isArray(keys)) {
    throw new TypeError("Keys must be an array.");
  }

  const result = {};

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

const user = {
  name: "Tanish",
  age: 21,
  city: "Delhi"
};

console.log(pickProperties(user, ["name", "age"]));