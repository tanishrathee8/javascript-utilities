async function fetchJSON(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}`
    );
  }

  return response.json();
}

fetchJSON("https://jsonplaceholder.typicode.com/users/1")
  .then(console.log)
  .catch(console.error);