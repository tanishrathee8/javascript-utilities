function compactDeepObject(value) {
  if (Array.isArray(value)) {
    return value
      .filter(item => item != null)
      .map(compactDeepObject);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, item]) => item != null)
        .map(([key, item]) => [
          key,
          compactDeepObject(item)
        ])
    );
  }

  return value;
}

const user = {
  name: "Tanish",
  age: null,
  profile: {
    city: undefined,
    role: "Developer"
  }
};

console.log(compactDeepObject(user));