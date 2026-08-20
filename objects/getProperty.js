/**
 * Safely retrieves a property from an object.
 * @param {Object} obj
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
function getProperty(obj, key, defaultValue = null) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be an object.");
  }

  return Object.prototype.hasOwnProperty.call(obj, key)
    ? obj[key]
    : defaultValue;
}

const user = {
  name: "Tanish",
  age: 21
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "city", "Unknown"));