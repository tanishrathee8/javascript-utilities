function omitProperties(object, keys) {
  const keySet = new Set(keys);

  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !keySet.has(key))
  );
}

module.exports = omitProperties;