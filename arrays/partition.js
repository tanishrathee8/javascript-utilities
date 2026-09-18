function partition(arr, predicate) {
  return arr.reduce(
    ([passed, failed], item) => {
      if (predicate(item)) {
        passed.push(item);
      } else {
        failed.push(item);
      }

      return [passed, failed];
    },
    [[], []]
  );
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(
  partition(numbers, number => number % 2 === 0)
);