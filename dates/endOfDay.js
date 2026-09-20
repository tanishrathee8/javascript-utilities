function endOfDay(date) {
  const result = new Date(date);

  result.setHours(23, 59, 59, 999);

  return result;
}

const date = new Date("2026-09-20T14:30:00");

console.log(endOfDay(date));