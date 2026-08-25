function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function example() {
  console.log("Starting...");

  await delay(1000);

  console.log("Finished after 1 second");
}

example();