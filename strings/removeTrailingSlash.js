function removeTrailingSlash(url) {
  return url.replace(/\/+$/, "");
}

console.log(removeTrailingSlash("https://example.com/"));
console.log(removeTrailingSlash("https://example.com"));