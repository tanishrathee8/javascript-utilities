function objectEntries(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be an object.");
  }

  return Object.entries(obj);
}

const user = {
  name: "Tanish",
  age: 21
};

console.log(objectEntries(user));