function reverseNumber(number) {
  const reversed = Number(
    Math.abs(number).toString().split("").reverse().join("")
  );

  return number < 0 ? -reversed : reversed;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(-9876));