function getProperty(obj, path, defaultValue = null) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be an object.");
  }

  if (typeof path !== "string" || path.trim() === "") {
    return defaultValue;
  }

  const value = path.split(".").reduce((current, key) => {
    return current?.[key];
  }, obj);

  return value ?? defaultValue;
}

const user = {
  name: "Tanish",
  profile: {
    city: "Delhi"
  }
};

console.log(getProperty(user, "profile.city"));
console.log(getProperty(user, "profile.country", "Unknown"));