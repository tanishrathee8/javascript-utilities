function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
}

setStorage("user", { name: "Tanish", role: "developer" });

console.log(getStorage("user"));