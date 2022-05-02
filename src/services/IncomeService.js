import createHttp from "./BaseService";

const http = createHttp(true)

export const createIncome = (data) => http.post('/income/new', data)
export const deleteIncome = (id) => http.delete(`income/${id}`)