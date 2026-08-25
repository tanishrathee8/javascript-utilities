function getKeys(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be an object.");
  }

  return Object.keys(obj);
}

const user = {
  name: "Tanish",
  age: 21,
  role: "developer"
};

console.log(getKeys(user));