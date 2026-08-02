function countDigits(number) {
  return Math.abs(number).toString().length;
}

console.log(countDigits(12345));
console.log(countDigits(-9876));