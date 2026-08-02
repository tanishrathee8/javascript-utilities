function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicates([1, 2, 3, 4]));
console.log(hasDuplicates([1, 2, 2, 4]));