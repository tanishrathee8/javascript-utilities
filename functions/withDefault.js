function withDefault(fn, defaultValue) {
  return (...args) => {
    const result = fn(...args);

    return result === undefined ? defaultValue : result;
  };
}

const getUsername = withDefault(
  user => user.username,
  "Guest"
);

console.log(getUsername({ username: "Tanish" }));
console.log(getUsername({}));