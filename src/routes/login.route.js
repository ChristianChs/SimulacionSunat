import { Router } from "express";
import { login, login2 } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.post('/login2',login2)


export default router