function mergeObjects(obj1, obj2) {
  if (
    obj1 === null ||
    typeof obj1 !== "object" ||
    obj2 === null ||
    typeof obj2 !== "object"
  ) {
    throw new TypeError("Both inputs must be objects.");
  }

  return { ...obj1, ...obj2 };
}

const user = {
  name: "Tanish",
  age: 21
};

const details = {
  age: 22,
  role: "developer"
};

console.log(mergeObjects(user, details));