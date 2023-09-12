import { Router } from "express";
import { ExtraerData, ExtraerDataLog,  login, login2, register,register2 } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.post('/login2',login2)

router.post('/register',register)

router.post('/register2',register2)

router.post('/getData',ExtraerData)

router.post('/getLogin',ExtraerDataLog)


export default router