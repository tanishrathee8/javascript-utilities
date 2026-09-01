function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (
      current[key] === null ||
      typeof current[key] !== "object"
    ) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;

  return obj;
}

const user = {};

setNestedValue(user, "profile.address.city", "Delhi");

console.log(user);