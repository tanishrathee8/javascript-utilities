function partial(fn, ...presetArgs) {
  return (...laterArgs) => {
    return fn(...presetArgs, ...laterArgs);
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const multiplyByTwo = partial(multiply, 2);

console.log(multiplyByTwo(3, 4));