function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

const user = {
  name: "Tanish",
  age: 21
};

console.log(hasOwn(user, "name"));
console.log(hasOwn(user, "email"));