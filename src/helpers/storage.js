import cookies from "js-cookie";

const STORAGE_TOKEN_KEY = "token";
const DEFAULT_COOKIE_OPTS = {
  expires: 30, // 30 days
  domain: window.location.hostname,
  path: "/",
};

export function setCookie(key, value, config = DEFAULT_COOKIE_OPTS) {
  return cookies.set(key, value, config);
}

export function getCookie(key) {
  return cookies.get(key);
}

export function removeCookie() {
  return cookies.remove(STORAGE_TOKEN_KEY);
}

export function setToken(value) {
  return cookies.set(STORAGE_TOKEN_KEY, value, DEFAULT_COOKIE_OPTS);
}

export function getToken() {
  return cookies.get(STORAGE_TOKEN_KEY);
}

export function removeToken() {
  return cookies.remove(STORAGE_TOKEN_KEY, DEFAULT_COOKIE_OPTS);
}
