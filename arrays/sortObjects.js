function sortObjects(arr, key) {
  return [...arr].sort((a, b) => a[key] - b[key]);
}

const students = [
  { name: "Aman", marks: 70 },
  { name: "Tanish", marks: 92 },
  { name: "Rahul", marks: 81 }
];

console.log(sortObjects(students, "marks"));