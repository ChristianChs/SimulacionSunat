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
    const [dataAPI, setDataAPI]= useState(null)
    const[dataUser,setUserData]=useState([])
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
    const saveDataUser = (data)=>{
        console.log("recibo de :",data)
        setUserData(data)
        console.log("actualizado ",dataUser)
    }

    /*const previewData = (data)=>{
        console.log("llego",dataRecibo)
        console.log("llego",data)
        const tmp = {
            "ruc_dest":dataRecibo.ruc_dest,
            "form_pago":dataRecibo.form_pago,
            "tipo_doc_dest":dataRecibo.tipo_doc_dest,
            "descripcion_rxh":data.descripcion_rxh
        }

        setDataAPI(tmp);
        console.log(dataAPI)        

    }*/

    
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errors])
    useEffect(()=>{
        const id_login=JSON.parse(localStorage.getItem('loggindata'))
        setUserData(id_login)
    },[])
    return (
        <ReciboxHContext.Provider value={{
            consultaRUC,
            errors,
            isDestinatario,
            isContinue,
            saveDataUser,
            dataUser
        }}>
            {children}
        </ReciboxHContext.Provider>
    )
}