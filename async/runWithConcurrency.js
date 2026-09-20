async function runWithConcurrency(tasks, limit) {
  if (limit < 1) {
    throw new RangeError("Concurrency limit must be at least 1");
  }

  const results = new Array(tasks.length);
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const index = nextIndex++;

      if (index >= tasks.length) {
        return;
      }

      results[index] = await tasks[index]();
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    worker
  );

  await Promise.all(workers);

  return results;
}

const tasks = [
  () => Promise.resolve("A"),
  () => Promise.resolve("B"),
  () => Promise.resolve("C"),
  () => Promise.resolve("D")
];

runWithConcurrency(tasks, 2).then(console.log);