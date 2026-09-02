async function mapWithConcurrency(items, callback, limit) {
  const results = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;

      results[currentIndex] = await callback(
        items[currentIndex],
        currentIndex
      );
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, items.length) },
    () => worker()
  );

  await Promise.all(workers);

  return results;
}

const numbers = [1, 2, 3, 4, 5];

mapWithConcurrency(
  numbers,
  async number => number * 2,
  2
).then(console.log);