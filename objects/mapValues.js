function mapValues(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      callback(value, key)
    ])
  );
}

const prices = {
  laptop: 1000,
  phone: 500,
  tablet: 300
};

console.log(mapValues(prices, price => price * 1.18));