async function copyToClipboard(text) {
  if (typeof text !== "string") {
    throw new TypeError("Text must be a string.");
  }

  await navigator.clipboard.writeText(text);

  console.log("Text copied successfully.");
}

copyToClipboard("Hello from JavaScript!");