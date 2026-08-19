function groupBy(arr, key) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return arr.reduce((groups, item) => {
    const value = item[key];

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(item);

    return groups;
  }, {});
}

const users = [
  { name: "Tanish", role: "developer" },
  { name: "Rahul", role: "designer" },
  { name: "Aman", role: "developer" }
];

console.log(groupBy(users, "role"));