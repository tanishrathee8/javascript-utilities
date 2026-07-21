function removeEmptyStrings(arr) {
  return arr.filter(item => item.trim() !== "");
}

const words = ["JavaScript", "", "React", " ", "Node.js"];

console.log(removeEmptyStrings(words));