import { setTokenHeader, clearTokenHeader } from './request'

const TOKEN_NAMESPACE = 'matcha-token'

export const setToken = (token) => {
  setTokenHeader(token)
  return localStorage.setItem(TOKEN_NAMESPACE, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAMESPACE)
}

export const clearToken = () => {
  clearTokenHeader()
  localStorage.removeItem(TOKEN_NAMESPACE)
}
