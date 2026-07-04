async function retry(fn, retries = 3) {
  while (retries > 0) {
    try {
      return await fn();
    } catch (error) {
      retries--;
    }
  }

  throw new Error("All retries failed");
}

async function example() {
  return "Success";
}

retry(example).then(console.log);