import createHttp from "./BaseService";

const http = createHttp(true)

export const createIncome = (data) => http.post('/income/new', data)