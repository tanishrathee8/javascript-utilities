function camelToSnake(str) {
  return str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
}

console.log(camelToSnake("firstName"));
console.log(camelToSnake("userProfileImage"));