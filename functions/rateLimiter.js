function rateLimiter(callback, limit) {
  let calls = 0;

  return function (...args) {
    if (calls >= limit) {
      console.log("Rate limit reached");
      return;
    }

    calls++;
    return callback(...args);
  };
}

const limitedFunction = rateLimiter(
  message => console.log(message),
  2
);

limitedFunction("First call");
limitedFunction("Second call");
limitedFunction("Third call");