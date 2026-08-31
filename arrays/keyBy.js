function keyBy(arr, key) {
  return arr.reduce((result, item) => {
    result[item[key]] = item;
    return result;
  }, {});
}

const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" }
];

console.log(keyBy(users, "id"));