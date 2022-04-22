import decode from 'jwt-decode'

export const verifyJWT = (token) => {
  const decodedToken = decode(token)

  return Date.now() <= decodedToken.exp * 1000
}