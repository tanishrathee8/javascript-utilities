function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    throw new TypeError("Seconds must be a non-negative number.");
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${hours}h ${minutes}m ${remainingSeconds}s`;
}

console.log(formatDuration(3665));
console.log(formatDuration(125));