function discountedPrice(price, discount) {
  if (
    !Number.isFinite(price) ||
    !Number.isFinite(discount) ||
    price < 0 ||
    discount < 0 ||
    discount > 100
  ) {
    throw new TypeError("Invalid price or discount.");
  }

  return price - (price * discount) / 100;
}

console.log(discountedPrice(1000, 20));