import createHttp from "./BaseService";

const http = createHttp(false)

export const createUser = (data) => http.post('/register', data)