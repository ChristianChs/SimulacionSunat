import model from "../models/login.model.js";


export const login = async (req, res) => {
    const { dni, password } = req.body;
    try {
        const userFound = await model.findUser(dni)
        console.log(userFound)
        if (!userFound) return res.status(400).json({ message: "DNI no encontrado" })
        const isMatch = password === userFound[0].clave ? true : false
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" })
        res.json({
            id: userFound[0].id,
            ruc: userFound[0].ruc,
            dni: userFound[0].dni,
            usuario: userFound[0].usuario
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login2 = async (req, res) => {
    const { nruc, user, password2 } = req.body;
    try {
        const userFound = await model.findUser2(nruc)
        console.log(userFound)
        if (!userFound) return res.status(400).json({ message: "RUC no registrado" })
        const isMatchUser = user === userFound[0].usuario ? true : false
        if (!isMatchUser) return res.status(400).json({ message: "Usuario incorrecto" })
        const isMatch = password2 === userFound[0].clave ? true : false
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" })
        res.json({
            id: userFound[0].id,
            ruc: userFound[0].ruc,
            dni: userFound[0].dni,
            usuario: userFound[0].usuario
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const register = async (req, res) => {
    try {
        const userFound = await model.inUser(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Información Recopilada" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const register3 = async (req, res) => {
    try {
        const userFound = await model.inUser3(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Información Recopilada" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const register2 = async (req, res) => {
    try {
        const userFound = await model.indUser2(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerfact = async (req, res) => {
    try {
        const userFound = await model.inFact(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerBol = async (req, res) => {
    try {
        const userFound = await model.inBol(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerPfact = async (req, res) => {
    try {
        const userFound = await model.inPFact(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerfactcu = async (req, res) => {
    try {
        const userFound = await model.inFactcu(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerfactde = async (req, res) => {
    try {
        const userFound = await model.inFactde(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerPBol = async (req, res) => {
    try {
        const userFound = await model.inPBol(req.body)
        console.log("asdjsa",userFound)
        return res.status(200).json({ message: "Usuario Registrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerData = async (req, res) => {
    try {
        const { id_login } = req.body;
        const userFound = await model.Extraer(id_login)
        console.log("asdjsa",userFound)
        res.json(userFound[0])
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const registerCuotas = async (req, res) => {
    try {
        const userFound = await model.inCuota(req.body)
        console.log("XDDD",userFound)
        return res.status(200).json({ message: "Cuota Registrada" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerCuotas = async (req, res) => {
    try {
        const userFound = await model.ExtraerC()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerFactura = async (req, res) => {
    try {
        const userFound = await model.ExtraerF()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerFacturaC = async (req, res) => {
    try {
        const userFound = await model.ExtraerFC()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerFacturaD = async (req, res) => {
    try {
        const userFound = await model.ExtraerFD()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerBoleta = async (req, res) => {
    try {
        const userFound = await model.ExtraerB()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerPBoleta = async (req, res) => {
    try {
        const userFound = await model.ExtraerPB()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerPFactura = async (req, res) => {
    try {
        const userFound = await model.ExtraerPF()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerDataLog = async (req, res) => {
    try {
        const { id_login } = req.body;
        const userFound = await model.Extraer2(id_login)
        console.log("asdjsa",userFound)
        res.json(userFound[0])
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const ExtraerFecha = async (req, res) => {
    try {
        const { id_login } = req.body;
        const userFound = await model.ExtraerFecha(id_login)
        console.log("asdjsa",userFound)
        res.json(userFound[0])
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const Vaciar = async (req, res) => {
    try {
        const userFound = await model.Vaciar()
        console.log("Extraccion de cuotas",userFound)
        res.json(userFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}