function isStrongPassword(password) {
  if (typeof password !== "string") {
    return false;
  }

  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

console.log(isStrongPassword("Hello@123"));
console.log(isStrongPassword("password"));