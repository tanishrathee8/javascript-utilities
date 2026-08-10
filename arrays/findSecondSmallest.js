function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return null;
  }

  const unique = [...new Set(arr)].sort((a, b) => a - b);

  return unique.length < 2 ? null : unique[1];
}

console.log(findSecondSmallest([5, 2, 8, 1, 4]));