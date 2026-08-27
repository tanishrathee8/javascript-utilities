function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }

  return JSON.parse(JSON.stringify(obj));
}

const user = {
  name: "Tanish",
  skills: ["JavaScript", "React"]
};

const clonedUser = deepClone(user);

clonedUser.skills.push("Node.js");

console.log(user);
console.log(clonedUser);