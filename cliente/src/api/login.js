import axios from 'axios'

const API = 'http://localhost:3000/api'

export const loginRequest = (user) => axios.post(`${API}/login`, user)

export const loginRequest2 = (user) => axios.post(`${API}/login2`, user)

export const registerRequest2 = (user) => axios.post(`${API}/register`, user)

export const registerRequest = (user) => axios.post(`${API}/register2`, user)

export const dataRequest = (user) => axios.post(`${API}/getData`, user)

export const dataLogRequest = (user) => axios.post(`${API}/getLogin`, user)