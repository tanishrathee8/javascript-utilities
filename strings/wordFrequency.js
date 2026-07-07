function wordFrequency(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const frequency = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
}

console.log(wordFrequency("javascript is fun javascript is powerful"));