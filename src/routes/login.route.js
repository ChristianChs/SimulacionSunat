import { Router } from "express";
import { login } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.get('/',(req,res)=>{res.json("Hola mundo")})


export default router