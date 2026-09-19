async function settleAll(tasks) {
  return Promise.all(
    tasks.map(async task => {
      try {
        const value = await task();

        return {
          status: "fulfilled",
          value
        };
      } catch (reason) {
        return {
          status: "rejected",
          reason
        };
      }
    })
  );
}

const tasks = [
  () => Promise.resolve("Success"),
  () => Promise.reject(new Error("Something failed")),
  () => Promise.resolve("Another success")
];

settleAll(tasks).then(console.log);