function movingAverage(numbers, windowSize) {
  if (windowSize <= 0 || windowSize > numbers.length) {
    return [];
  }

  const averages = [];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (i >= windowSize) {
      sum -= numbers[i - windowSize];
    }

    if (i >= windowSize - 1) {
      averages.push(sum / windowSize);
    }
  }

  return averages;
}

console.log(movingAverage([10, 20, 30, 40, 50], 3));