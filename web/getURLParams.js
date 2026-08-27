function getURLParams() {
  return Object.fromEntries(
    new URLSearchParams(window.location.search)
  );
}

console.log(getURLParams());