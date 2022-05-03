import createHttp from "./BaseService";

const http = createHttp(true)

export const createExpense = (data) => http.post('/expense/new', data)
export const getExpense = (id) => http.get(`/expense/${id}`)
export const deleteExpense = (id) => http.delete(`/expense/${id}`)
export const updateExpense = (id, data) => http.patch(`/expense/${id}`, data)