function formatCurrency(amount, locale = "en-IN", currency = "INR") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}

console.log(formatCurrency(123456.78));