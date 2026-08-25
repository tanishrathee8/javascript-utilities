function parseQueryString(query) {
  if (typeof query !== "string") {
    throw new TypeError("Query must be a string.");
  }

  const queryString = query.startsWith("?")
    ? query.slice(1)
    : query;

  return Object.fromEntries(new URLSearchParams(queryString));
}

console.log(
  parseQueryString("?search=javascript&page=2")
);