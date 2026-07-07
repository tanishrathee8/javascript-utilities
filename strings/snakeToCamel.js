function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

console.log(snakeToCamel("first_name"));
console.log(snakeToCamel("user_profile_image"));