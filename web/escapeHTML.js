function escapeHTML(str) {
  const characters = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };

  return str.replace(/[&<>"']/g, char => characters[char]);
}

console.log(
  escapeHTML('<script>alert("Hello")</script>')
);