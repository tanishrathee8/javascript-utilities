function padNumber(number, length) {
  return String(number).padStart(length, "0");
}

console.log(padNumber(7, 3));
console.log(padNumber(25, 5));