function throttle(callback, delay) {
  let waiting = false;

  return function (...args) {
    if (waiting) {
      return;
    }

    callback(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

const handleScroll = throttle(() => {
  console.log("Scroll handled");
}, 1000);

handleScroll();