function shuffleArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array.");
  }

  const result = [...arr];

  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));