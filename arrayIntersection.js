function arrayIntersection(arr1, arr2) {
  const set = new Set(arr2);

  return arr1.filter(item => set.has(item));
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));