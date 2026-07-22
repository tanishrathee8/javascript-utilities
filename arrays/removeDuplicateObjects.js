function removeDuplicateObjects(arr, key) {
  const seen = new Set();

  return arr.filter(item => {
    if (seen.has(item[key])) {
      return false;
    }

    seen.add(item[key]);
    return true;
  });
}

const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Tanish" }
];

console.log(removeDuplicateObjects(users, "id"));