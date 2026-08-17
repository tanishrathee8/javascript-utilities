function findKeyByValue(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }

  return null;
}

const user = {
  name: "Tanish",
  role: "developer"
};

console.log(findKeyByValue(user, "developer"));