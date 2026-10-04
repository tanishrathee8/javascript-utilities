function negate(predicate) {
  return (...args) => !predicate(...args);
}

module.exports = negate;