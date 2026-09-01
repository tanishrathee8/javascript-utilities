async function promisePool(tasks, limit) {
  const results = [];
  let nextTask = 0;

  async function worker() {
    while (nextTask < tasks.length) {
      const index = nextTask++;
      results[index] = await tasks[index]();
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    () => worker()
  );

  await Promise.all(workers);

  return results;
}

const tasks = [
  () => Promise.resolve("Task 1"),
  () => Promise.resolve("Task 2"),
  () => Promise.resolve("Task 3")
];

promisePool(tasks, 2).then(console.log);
