function commonElements(arr1, arr2) {
  const values = new Set(arr2);

  return arr1.filter(item => values.has(item));
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(commonElements(["a", "b"], ["b", "c"]));