function compactObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value != null)
  );
}

const user = {
  name: "Tanish",
  age: null,
  city: undefined,
  role: "Developer"
};

console.log(compactObject(user));