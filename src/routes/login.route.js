import { Router } from "express";
import { login, login2, register2 } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.post('/login2',login2)

router.post('/register',login)

router.post('/register2',register2)


export default router