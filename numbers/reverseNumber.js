function reverseNumber(num) {
  const reversed = Number(String(Math.abs(num)).split("").reverse().join(""));

  return num < 0 ? -reversed : reversed;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(-9876));