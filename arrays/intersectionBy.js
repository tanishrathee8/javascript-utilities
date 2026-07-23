function intersectionBy(arr1, arr2, key) {
  const values = new Set(arr2.map(item => item[key]));

  return arr1.filter(item => values.has(item[key]));
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const activeUsers = [
  { id: 2 },
  { id: 3 }
];

console.log(intersectionBy(users, activeUsers, "id"));