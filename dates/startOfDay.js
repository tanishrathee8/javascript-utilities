function startOfDay(date) {
  const result = new Date(date);

  result.setHours(0, 0, 0, 0);

  return result;
}

const date = new Date("2026-09-18T17:45:30");

console.log(startOfDay(date));