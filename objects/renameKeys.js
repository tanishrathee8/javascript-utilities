function renameKeys(obj, keyMap) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      keyMap[key] ?? key,
      value
    ])
  );
}

const user = {
  first_name: "Tanish",
  last_name: "Rathee",
  user_id: 101
};

console.log(
  renameKeys(user, {
    first_name: "firstName",
    last_name: "lastName",
    user_id: "id"
  })
);