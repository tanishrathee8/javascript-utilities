function delay(callback, ms) {
  setTimeout(callback, ms);
}

delay(() => {
  console.log("Executed after 2 seconds");
}, 2000);