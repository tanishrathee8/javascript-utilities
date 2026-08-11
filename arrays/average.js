function findAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const sum = arr.reduce((total, num) => total + num, 0);

  return sum / arr.length;
}

console.log(findAverage([10, 20, 30, 40]));