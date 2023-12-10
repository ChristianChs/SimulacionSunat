import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRleGV2aTU1MzhAZ2V0bW9sYS5jb20ifQ.vYKrEmb_NhYuQkdU3RJ7kSX9UH2eqkbMJAjs-YU60pE"
const APIRUC = 'https://dniruc.apisperu.com/api/v1'

export const validaRUC = (data) => axios.get(`${APIRUC}/ruc/${data}?token=${token}`)
export const validaDNI = (data) => axios.get(`${APIRUC}/dni/${data}?token=${token}`)