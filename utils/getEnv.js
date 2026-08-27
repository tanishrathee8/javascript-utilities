function getEnv(name, defaultValue = null) {
  const value = process.env[name];

  return value !== undefined ? value : defaultValue;
}

console.log(getEnv("NODE_ENV", "development"));