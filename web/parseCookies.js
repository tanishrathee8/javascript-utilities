function parseCookies(cookieString) {
  if (!cookieString) {
    return {};
  }

  return cookieString.split(";").reduce((cookies, cookie) => {
    const [key, ...value] = cookie.trim().split("=");

    cookies[key] = decodeURIComponent(value.join("="));

    return cookies;
  }, {});
}

console.log(
  parseCookies("theme=dark; username=Tanish; language=en")
);