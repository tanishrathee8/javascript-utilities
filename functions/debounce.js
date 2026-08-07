/**
 * Returns a debounced version of a function.
 * @param {Function} callback
 * @param {number} delay
 * @returns {Function}
 */
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const print = debounce((text) => console.log(text), 1000);

print("Hello");