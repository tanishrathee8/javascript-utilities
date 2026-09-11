function isSameDay(date1, date2) {
  const first = new Date(date1);
  const second = new Date(date2);

  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

console.log(
  isSameDay(
    "2026-09-11T10:00:00",
    "2026-09-11T22:30:00"
  )
);

console.log(
  isSameDay("2026-09-11", "2026-09-12")
);