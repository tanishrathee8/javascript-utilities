function getNestedValues(obj, paths) {
  return Object.fromEntries(
    paths.map(path => {
      const value = path
        .split(".")
        .reduce((current, key) => current?.[key], obj);

      return [path, value];
    })
  );
}

const user = {
  name: "Tanish",
  profile: {
    location: {
      city: "Hisar",
      country: "India"
    }
  }
};

console.log(
  getNestedValues(user, [
    "name",
    "profile.location.city",
    "profile.location.country"
  ])
);