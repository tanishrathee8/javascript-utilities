function differenceBy(arr1, arr2, key) {
  const values = new Set(arr2.map(item => item[key]));

  return arr1.filter(item => !values.has(item[key]));
}

const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" }
];

const activeUsers = [
  { id: 2 },
  { id: 3 }
];

console.log(differenceBy(users, activeUsers, "id"));