import { Router } from "express";
import { ExtraerData, ExtraerDataLog, ExtraerCuotas, ExtraerFecha,registerCuotas,  login, login2, register,register2,register3 } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.post('/login2',login2)

router.post('/register',register)

router.post('/register2',register2)

router.post('/register3',register3)

router.post('/getData',ExtraerData)

router.post('/getLogin',ExtraerDataLog)

router.post('/getFecha',ExtraerFecha)

router.post('/registerCuotas',registerCuotas)

router.post('/getCuotas',ExtraerCuotas)

export default router