function invertObject(obj) {
  const result = {};

  for (const key in obj) {
    result[obj[key]] = key;
  }

  return result;
}

const user = {
  name: "Tanish",
  role: "developer"
};

console.log(invertObject(user));