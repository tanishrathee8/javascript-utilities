function groupByProperty(arr, key) {
  return arr.reduce((result, item) => {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);

    return result;
  }, {});
}

const users = [
  { name: "Tanish", role: "student" },
  { name: "Rahul", role: "developer" },
  { name: "Aman", role: "student" }
];

console.log(groupByProperty(users, "role"));