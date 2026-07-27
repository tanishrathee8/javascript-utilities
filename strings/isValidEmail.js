function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}

console.log(isValidEmail("tanish@example.com"));
console.log(isValidEmail("hello.com"));function isValidEmail(email) {
  if (typeof email !== "string") {
    return false;
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email.trim());
}

console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("invalid-email"));