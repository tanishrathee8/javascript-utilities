function generateArray(length, callback) {
  const result = [];

  for (let index = 0; index < length; index++) {
    result.push(callback(index));
  }

  return result;
}

console.log(generateArray(5, index => index * 2));