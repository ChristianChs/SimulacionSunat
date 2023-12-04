import axios from 'axios'

const API = 'http://localhost:3000/api'

export const loginRequest = (user) => axios.post(`${API}/login`, user)

export const loginRequest2 = (user) => axios.post(`${API}/login2`, user)

export const registerRequest2 = (user) => axios.post(`${API}/register`, user)

export const registerRequest = (user) => axios.post(`${API}/register2`, user)

export const registerRequest3 = (user) => axios.post(`${API}/register3`, user)

export const registerfact = (user) => axios.post(`${API}/registerfact`, user)

export const registerPfact = (user) => axios.post(`${API}/registerPfact`, user)

export const registerCuotas = (user) => axios.post(`${API}/registerCuotas`, user)

export const dataRequest = (user) => axios.post(`${API}/getData`, user)

export const dataLogRequest = (user) => axios.post(`${API}/getLogin`, user)

export const dataLogFecha = (user) => axios.post(`${API}/getFecha`, user)

export const dataCuota = (user) => axios.post(`${API}/getCuotas`, user)