function range(start, end, step = 1) {
  const result = [];

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

console.log(range(1, 10));
console.log(range(0, 20, 5));