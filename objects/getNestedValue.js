function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, obj);
}

const user = {
  profile: {
    name: "Tanish",
    address: {
      city: "Delhi"
    }
  }
};

console.log(getNestedValue(user, "profile.address.city"));
console.log(getNestedValue(user, "profile.phone"));