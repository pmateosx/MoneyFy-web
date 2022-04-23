import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/me')
export const getUserDetail = (id) => http.get(`/users/${id}`)