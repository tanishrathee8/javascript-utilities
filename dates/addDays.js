function addDays(date, days) {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  return result;
}

const date = new Date("2026-09-09");

console.log(addDays(date, 7));
console.log(addDays(date, -3));