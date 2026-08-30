function measureTime(callback) {
  const start = performance.now();

  const result = callback();

  const end = performance.now();

  console.log(`Execution time: ${(end - start).toFixed(2)} ms`);

  return result;
}

const result = measureTime(() => {
  let total = 0;

  for (let i = 0; i < 1000000; i++) {
    total += i;
  }

  return total;
});

console.log(result);