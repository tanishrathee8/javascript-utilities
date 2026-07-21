function createSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

console.log(createSlug("Learn JavaScript in 30 Days"));