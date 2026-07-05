function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(
  deepEqual(
    { name: "Tanish", age: 21 },
    { name: "Tanish", age: 21 }
  )
);