function hasProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Checks whether an object contains the specified own property.
 */
const user = {
  name: "Tanish",
  age: 21,
};

console.log(hasProperty(user, "name"));
console.log(hasProperty(user, "email"));