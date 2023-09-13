import { Router } from "express";
import { ExtraerData, ExtraerDataLog,ExtraerCuota,  ExtraerFecha,  login, login2, register,register2,register3,registerCuotas } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.post('/login2',login2)

router.post('/register',register)

router.post('/register2',register2)

router.post('/register3',register3)

router.post('/registerCuotas',registerCuotas)

router.post('/getData',ExtraerData)

router.post('/getLogin',ExtraerDataLog)

router.post('/getFecha',ExtraerFecha)

router.post('/getCuota',ExtraerCuota)


export default router