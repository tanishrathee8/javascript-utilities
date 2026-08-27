function randomId(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";

  for (let i = 0; i < length; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }

  return id;
}

console.log(randomId());
console.log(randomId(12));