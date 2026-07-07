function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;

  for (const num of arr) {
    num % 2 === 0 ? even++ : odd++;
  }

  return { even, odd };
}

console.log(countEvenOdd([1,2,3,4,5,6,7,8]));