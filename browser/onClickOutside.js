function onClickOutside(element, callback) {
  function handleClick(event) {
    if (!element.contains(event.target)) {
      callback(event);
    }
  }

  document.addEventListener("click", handleClick);

  return function removeListener() {
    document.removeEventListener("click", handleClick);
  };
}