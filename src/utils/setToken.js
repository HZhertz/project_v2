//存token
export function setToken(tokenKey, token) {
  return localStorage.setItem(tokenKey, token)
}
//取token
export function getToken(tokenKey) {
  return localStorage.getItem(tokenKey)
}
//移除token
export function removeToken(tokenKey) {
  return localStorage.removeItem(tokenKey)
}
