import createHttp from "./BaseService";

const http = createHttp(true)

export const createExpense = (data) => http.post('/expense/new', data)