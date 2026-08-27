function sleep(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function run() {
  console.log("Start");

  await sleep(1000);

  console.log("One second later");
}

run();