import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNvcm9mbzM4NjNAY3ppbG91LmNvbSJ9.SaGVU_UlCFzIml5rWSkwlJbru50OwuXWRJNzPaXZIHs"
const APIRUC = 'https://dniruc.apisperu.com/api/v1'

export const validaRUC = (data) => axios.get(`${APIRUC}/ruc/${data}?token=${token}`)
export const validaDNI = (data) => axios.get(`${APIRUC}/dni/${data}?token=${token}`)