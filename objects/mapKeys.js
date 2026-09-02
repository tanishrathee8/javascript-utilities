function mapKeys(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      callback(value, key),
      value
    ])
  );
}

const user = {
  firstName: "Tanish",
  lastName: "Rathee"
};

console.log(
  mapKeys(user, (_, key) => key.toUpperCase())
);