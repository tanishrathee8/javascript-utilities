async function retryWithDelay(task, attempts, delay) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await task();
    } catch (error) {
      lastError = error;

      if (attempt < attempts) {
        await new Promise(resolve => {
          setTimeout(resolve, delay);
        });
      }
    }
  }

  throw lastError;
}

let attempts = 0;

retryWithDelay(async () => {
  attempts++;

  if (attempts < 3) {
    throw new Error("Request failed");
  }

  return "Success";
}, 3, 500)
  .then(console.log)
  .catch(console.error);