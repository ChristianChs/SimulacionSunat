import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNlYmFzdGlhbmxpbmFyZXMyNDA5QGdtYWlsLmNvbSJ9.-pBXpe7CsILms3WRi5GRieQY2THliDn1gwIweC2Fkco"
const APIRUC = 'https://dniruc.apisperu.com/api/v1'

export const validaRUC = (data) => axios.get(`${APIRUC}/ruc/${data}?token=${token}`)
export const validaDNI = (data) => axios.get(`${APIRUC}/dni/${data}?token=${token}`)