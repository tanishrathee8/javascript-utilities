function interpolate(template, values) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return key in values ? values[key] : `{{${key}}}`;
  });
}

const message = interpolate(
  "Hello {{name}}, welcome to {{language}}!",
  {
    name: "Tanish",
    language: "JavaScript"
  }
);

console.log(message);