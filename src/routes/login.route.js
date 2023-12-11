import { Router } from "express";
import { ExtraerData, ExtraerDataLog, ExtraerCuotas, ExtraerFecha,registerCuotas,registerBol,registerfactcu,registerfactde,registerPBol,registerfact,registerPfact,  login, login2, register,register2,register3, ExtraerFactura, ExtraerPFactura, ExtraerPBoleta, ExtraerFacturaD, ExtraerFacturaC, ExtraerBoleta, } from "../controllers/login.controller.js";

const router = Router()

router.post('/login',login)

router.post('/login2',login2)

router.post('/register',register)

router.post('/register2',register2)

router.post('/register3',register3)

router.post('/registerfact',registerfact)

router.post('/registerfactcu',registerfactcu)

router.post('/registerfactde',registerfactde)

router.post('/registerBol',registerBol)

router.post('/registerPBol',registerPBol)

router.post('/registerPfact',registerPfact)

router.post('/getData',ExtraerData)

router.post('/getLogin',ExtraerDataLog)

router.post('/getFecha',ExtraerFecha)

router.post('/registerCuotas',registerCuotas)

router.post('/getCuotas',ExtraerCuotas)

router.post('/getfact',ExtraerFactura)

router.post('/getbol',ExtraerBoleta)

router.post('/getfactc',ExtraerFacturaC)

router.post('/getfactd',ExtraerFacturaD)

router.post('/getpfact',ExtraerPFactura)

router.post('/getpbol',ExtraerPBoleta)

export default router