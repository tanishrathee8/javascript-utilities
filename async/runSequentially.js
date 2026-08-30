async function runSequentially(tasks) {
  const results = [];

  for (const task of tasks) {
    results.push(await task());
  }

  return results;
}

const tasks = [
  () => Promise.resolve("First"),
  () => Promise.resolve("Second"),
  () => Promise.resolve("Third")
];

runSequentially(tasks).then(console.log);