function deepFreeze(obj) {
  Object.freeze(obj);

  Object.values(obj).forEach(value => {
    if (
      value !== null &&
      typeof value === "object" &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });

  return obj;
}

const user = {
  name: "Tanish",
  settings: {
    theme: "dark"
  }
};

deepFreeze(user);

console.log(Object.isFrozen(user));
console.log(Object.isFrozen(user.settings));