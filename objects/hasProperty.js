function hasProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

const user = {
  name: "Tanish",
  age: 21,
};

console.log(hasProperty(user, "name"));
console.log(hasProperty(user, "email"));