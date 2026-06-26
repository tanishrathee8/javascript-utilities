function deepClone(obj) {
  return structuredClone(obj);
}

const user = {
  name: "Tanish",
  skills: ["JavaScript", "React"]
};

const clone = deepClone(user);

console.log(clone);