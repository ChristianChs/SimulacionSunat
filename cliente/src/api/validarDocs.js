import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNvZGl0ZWc1MjVAcmVjdXR2LmNvbSJ9.y-OsH57JRHGqHaKFkdSsfn06hFnmMc6k-2TnpilqnoI"
const APIRUC = 'https://dniruc.apisperu.com/api/v1'

export const validaRUC = (data) => axios.get(`${APIRUC}/ruc/${data}?token=${token}`)
export const validaDNI = (data) => axios.get(`${APIRUC}/dni/${data}?token=${token}`)