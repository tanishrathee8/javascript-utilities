function buildURL(baseURL, path = "", params = {}) {
  const url = new URL(path, baseURL);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

console.log(
  buildURL(
    "https://example.com/",
    "/users",
    {
      page: 2,
      limit: 10,
      search: "javascript"
    }
  )
);