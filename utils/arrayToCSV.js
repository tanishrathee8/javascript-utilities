function arrayToCSV(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "";
  }

  return data
    .map(row =>
      row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");
}

const users = [
  ["Name", "Age"],
  ["Tanish", 21],
  ["Rahul", 22]
];

console.log(arrayToCSV(users));