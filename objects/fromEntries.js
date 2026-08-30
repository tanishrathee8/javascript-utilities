function fromEntries(entries) {
  if (!Array.isArray(entries)) {
    throw new TypeError("Input must be an array.");
  }

  return Object.fromEntries(entries);
}

const entries = [
  ["name", "Tanish"],
  ["role", "developer"],
  ["active", true]
];

console.log(fromEntries(entries));