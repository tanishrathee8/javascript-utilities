function isPalindromeNumber(number) {
  if (!Number.isInteger(number) || number < 0) {
    return false;
  }

  const value = String(number);

  return value === value.split("").reverse().join("");
}

console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(123));