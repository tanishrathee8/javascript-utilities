function getStatistics(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const sum = arr.reduce((total, num) => total + num, 0);

  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    average: sum / arr.length,
    sum
  };
}

console.log(getStatistics([10, 20, 30, 40]));