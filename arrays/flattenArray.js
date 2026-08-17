function flattenArray(arr) {
  return arr.flat();
}

console.log(flattenArray([[1,2],[3,4],[5,6]]));function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));