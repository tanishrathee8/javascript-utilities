function maskEmail(email) {
  const [username, domain] = email.split("@");

  if (!username || !domain) {
    return email;
  }

  if (username.length <= 2) {
    return `${username[0]}*@${domain}`;
  }

  return `${username[0]}${"*".repeat(username.length - 2)}${username.at(-1)}@${domain}`;
}

console.log(maskEmail("tanish@example.com"));