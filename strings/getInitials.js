function getInitials(name) {
  if (typeof name !== "string" || name.trim() === "") {
    return "";
  }

  return name
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase())
    .join("");
}

console.log(getInitials("Tanish Rathee"));
console.log(getInitials("John Ronald Reuel Tolkien"));