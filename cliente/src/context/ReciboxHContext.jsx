import { createContext, useContext, useEffect, useState } from "react";
import { validaRUC } from "../api/validarDocs";
const ReciboxHContext = createContext()

export const useReciboxH = () => {
    const context = useContext(ReciboxHContext)
    if (!context) {
        throw new Error("useLogin no está usando UseReciboxH")
    }
    return context
}

export const ReciboxHProvider = ({ children }) => {
    const [errors, setErrors] = useState([])
    const [isDestinatario, setDestinatario] = useState(null)
    const [isContinue, setIsContinue] = useState(false)
    const consultaRUC = async (ruc) => {
        try {
            const res = await validaRUC(ruc);
            console.log(res)
            if (!res.data.hasOwnProperty('success')) {
                setDestinatario(res.data)
                setIsContinue(true)
            } else {
                throw new Error(res.data.message)
            }
        } catch (error) {
            setErrors([error.message])
            setIsContinue(false)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errors])
    return (
        <ReciboxHContext.Provider value={{
            consultaRUC,
            errors,
            isDestinatario,
            isContinue
        }}>
            {children}
        </ReciboxHContext.Provider>
    )
}