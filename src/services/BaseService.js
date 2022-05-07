import axios from "axios";
import { getAccessToken, logout } from '../store/AccessTokenStore';

const createHttp = (useAccessToken = false) => {
    const http = axios.create({
        baseURL: 'https://moneyfy.onrender.com/api'
    })

    http.interceptors.request.use(
        (request) => {
            if(useAccessToken && getAccessToken()){
                request.headers.common.Authorization = `Bearer ${getAccessToken()}`
            }
            return request
    })

    http.interceptors.response.use(
        (response) => response.data,
        (error) => {
            if (error?.response?.status && [401, 403].includes(error.response.status)) {
                if (getAccessToken()){
                    logout()
                    if (window.location.pathname !== '/login'){
                        window.location.assign('/login')
                    }
                }
            }
            return Promise.reject(error)
        }
    )
    return http
}

export default createHttp