function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: "Tanish" }));
