function averageArray(arr) {
  if (arr.length === 0) return 0;

  const sum = arr.reduce((total, num) => total + num, 0);

  return sum / arr.length;
}

console.log(averageArray([10, 20, 30, 40]));