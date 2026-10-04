function partition(array, predicate) {
  const truthy = [];
  const falsy = [];

  for (const item of array) {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }

  return [truthy, falsy];
}

module.exports = partition;