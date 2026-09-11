function omitProperties(obj, keys) {
  const excluded = new Set(keys);

  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !excluded.has(key))
  );
}

const user = {
  id: 101,
  name: "Tanish",
  email: "tanish@example.com",
  password: "secret"
};

console.log(
  omitProperties(user, ["password", "email"])
);