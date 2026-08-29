function objectToFormData(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be an object.");
  }

  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

const data = objectToFormData({
  name: "Tanish",
  role: "developer"
});

console.log([...data.entries()]);