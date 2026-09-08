function parseCSV(csv) {
  const lines = csv.trim().split("\n");

  if (lines.length < 2) {
    return [];
  }

  const headers = lines[0].split(",").map(header => header.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",").map(value => value.trim());

    return Object.fromEntries(
      headers.map((header, index) => [
        header,
        values[index] ?? ""
      ])
    );
  });
}

const csv = `name,age,role
Tanish,21,Developer
Rahul,22,Designer`;

console.log(parseCSV(csv));