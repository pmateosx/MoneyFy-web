import createHttp from "./BaseService";

const http = createHttp(true)

export const createIncome = (data) => http.post('/income/new', data)
export const getIncome = (id) => http.get(`/income/${id}`)
export const deleteIncome = (id) => http.delete(`/income/${id}`)
export const updateIncome = (id, data) => http.patch(`/income/${id}`, data)