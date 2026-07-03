function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length;
}

console.log(countOccurrences([1,2,2,3,2,4], 2));