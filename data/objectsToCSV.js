function objectsToCSV(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "";
  }

  const headers = Object.keys(data[0]);

  const rows = data.map(item =>
    headers
      .map(header => `"${String(item[header] ?? "").replace(/"/g, '""')}"`)
      .join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

const users = [
  { name: "Tanish", age: 21 },
  { name: "Rahul", age: 22 }
];

console.log(objectsToCSV(users));