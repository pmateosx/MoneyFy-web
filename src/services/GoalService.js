import createHttp from "./BaseService";

const http = createHttp(true)

export const createGoal = (data) => http.post('/goal/new', data)
export const getGoal = (id) => http.get(`/goal/${id}`)
export const deleteGoal = (id) => http.delete(`/goal/${id}`)