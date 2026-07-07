function maskCardNumber(cardNumber) {
  const lastFour = cardNumber.slice(-4);
  return lastFour.padStart(cardNumber.length, "*");
}

console.log(maskCardNumber("1234567812345678"));