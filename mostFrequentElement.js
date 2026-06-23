function mostFrequentElement(arr) {
  const freq = {};
  let maxCount = 0;
  let result;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      result = num;
    }
  }

  return result;
}

console.log(mostFrequentElement([1,2,2,3,3,3,4]));