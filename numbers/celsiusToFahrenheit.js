function celsiusToFahrenheit(celsius) {
  if (!Number.isFinite(celsius)) {
    throw new TypeError("Temperature must be a number.");
  }

  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));