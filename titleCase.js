function titleCase(str) {
  return str
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}

console.log(titleCase("welcome to javascript utilities"));