async function retry(callback, attempts) {
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      return await callback();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

let count = 0;

retry(async () => {
  count++;

  if (count < 3) {
    throw new Error("Request failed");
  }

  return "Success";
}, 3)
  .then(console.log)
  .catch(console.error);