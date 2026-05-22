export const OWNER_PASSWORD = "ganeshpower";
export const SESSION_COOKIE = "ganesh-owner-session";

export function isValidOwnerPassword(password) {
  return password === OWNER_PASSWORD;
}

export function isAuthenticatedCookie(value) {
  return value === "active";
}
