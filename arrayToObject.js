function arrayToObject(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Aman" }
];

console.log(arrayToObject(users));