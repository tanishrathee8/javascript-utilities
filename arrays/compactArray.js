function compactArray(arr) {
  return arr.filter(item => item !== null && item !== undefined);
}

console.log(compactArray([1, null, 2, undefined, 3, null, 4]));