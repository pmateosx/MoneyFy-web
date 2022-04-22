const ACCESS_TOKEN_KEY = 'access_token'

let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || ''

export const setToken = (token) => {
  accessToken = token
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getAccessToken = () => {
  return accessToken
}

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)

  window.location.assign('/login')
}