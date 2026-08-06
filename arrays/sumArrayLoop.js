function sumArrayLoop(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumArrayLoop([10, 20, 30, 40]));