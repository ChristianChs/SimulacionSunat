import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNhamFmaTg1NTRAbmV3Y3Vwb24uY29tIn0.M1U5qOoJfWNeOU9A_4-QadWdWoTSHA_Nuvd32Um1kkY"
const APIRUC = 'https://dniruc.apisperu.com/api/v1'

export const validaRUC = (data) => axios.get(`${APIRUC}/ruc/${data}?token=${token}`)
export const validaDNI = (data) => axios.get(`${APIRUC}/dni/${data}?token=${token}`)