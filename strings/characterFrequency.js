/**
 * Counts the frequency of each non-space character.
 * @param {string} str
 * @returns {Object}
 */
function characterFrequency(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }

  const frequency = {};

  for (const char of str) {
    if (char === " ") continue;

    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

console.log(characterFrequency("javascript"));