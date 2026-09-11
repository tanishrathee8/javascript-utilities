function binaryInsert(arr, value) {
  const result = [...arr];

  let left = 0;
  let right = result.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (result[middle] < value) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  result.splice(left, 0, value);

  return result;
}

console.log(binaryInsert([1, 3, 5, 7], 4));