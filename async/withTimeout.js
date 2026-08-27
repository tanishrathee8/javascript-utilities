function withTimeout(promise, milliseconds) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Operation timed out."));
    }, milliseconds);
  });

  return Promise.race([promise, timeout]);
}

const request = new Promise(resolve => {
  setTimeout(() => resolve("Request completed"), 1000);
});

withTimeout(request, 2000)
  .then(console.log)
  .catch(console.error);