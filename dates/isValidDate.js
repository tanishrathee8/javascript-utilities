function isValidDate(value) {
  const date = new Date(value);

  return !Number.isNaN(date.getTime());
}

console.log(isValidDate("2026-08-29"));
console.log(isValidDate("invalid-date"));