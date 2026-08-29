function daysBetween(date1, date2) {
  const first = new Date(date1);
  const second = new Date(date2);

  const difference = Math.abs(second - first);

  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

console.log(daysBetween("2026-08-01", "2026-08-29"));