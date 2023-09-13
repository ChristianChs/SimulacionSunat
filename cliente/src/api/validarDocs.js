import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhcGVnaTE3OThAc2VzeGUuY29tIn0.kA46vxuxx1zjsvG9ZY5s5_2fjJCnen_veFz2L1LunIY"
const APIRUC = 'https://dniruc.apisperu.com/api/v1'

export const validaRUC = (data) => axios.get(`${APIRUC}/ruc/${data}?token=${token}`)
export const validaDNI = (data) => axios.get(`${APIRUC}/dni/${data}?token=${token}`)