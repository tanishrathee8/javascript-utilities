function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function demo() {
  console.log("Start");

  await sleep(2000);

  console.log("Finished after 2 seconds");
}


demo();