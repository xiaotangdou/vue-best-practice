import cookies from "js-cookie";

const STORAGE_TOKEN_KEY = "token";
const DEFAULT_COOKIE_OPTS = {
  expires: 30, // 30 days
  domain: window.location.hostname,
  path: "/",
};

function setCookie(key, value, config = DEFAULT_COOKIE_OPTS) {
  return cookies.set(key, value, config);
}

function getCookie(key) {
  return cookies.get(key);
}

function removeCookie() {
  return cookies.remove(STORAGE_TOKEN_KEY);
}

function setToken(value) {
  return cookies.set(STORAGE_TOKEN_KEY, value, DEFAULT_COOKIE_OPTS);
}

function getToken() {
  return cookies.get(STORAGE_TOKEN_KEY);
}

function removeToken() {
  return cookies.remove(STORAGE_TOKEN_KEY, DEFAULT_COOKIE_OPTS);
}

export default {
  setCookie,
  getCookie,
  removeCookie,
  setToken,
  getToken,
  removeToken,
};
