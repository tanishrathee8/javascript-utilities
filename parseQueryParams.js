function parseQueryParams(url) {
  const params = new URL(url).searchParams;

  return Object.fromEntries(params.entries());
}

console.log(
  parseQueryParams("https://example.com?page=2&sort=name")
);