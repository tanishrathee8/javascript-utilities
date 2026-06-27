
function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, "", "Hello", false, true, null, 5]));