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
            ruc: userFound[0].ruc,
            dni: userFound[0].dni,
            usuario: userFound[0].usuario
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login2 = async (req, res) => {
    const { ruc, user, password } = req.body;
    try {
        const userFound = await model.findUser2(ruc)
        console.log(userFound)
        if (!userFound) return res.status(400).json({ message: "RUC no registrado" })
        const isMatchUser = user === userFound[0].usuario ? true : false
        if (!isMatchUser) return res.status(400).json({ message: "Usuario incorrecto" })
        const isMatch = password === userFound[0].clave ? true : false
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" })
        res.json({
            ruc: userFound[0].ruc,
            dni: userFound[0].dni,
            usuario: userFound[0].usuario
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}