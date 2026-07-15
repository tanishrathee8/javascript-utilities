function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}

console.log(isValidEmail("tanish@example.com"));
console.log(isValidEmail("hello.com"));