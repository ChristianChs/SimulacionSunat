import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, loginRequest2, registerCuotas,registerfact,registerfactcu,registerfactde, registerRequest,registerPBol,registerBol, registerRequest2 } from "../api/login"
const LoginContext = createContext()

export const useLogin = () => {
  const context = useContext(LoginContext)
  if (!context) {
    throw new Error("useLogin no está usando LoginProvider")
  }
  return context
}

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataRecibo,setDataRecibo] = useState(null)

  const registrar = async (user) => {
    try {
      const res = await registerRequest(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarFactura = async (user) => {
    try {
      console.log(user);
      const res = await registerfact(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarFacturaCu = async (user) => {
    try {
      console.log(user);
      const res = await registerfactcu(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarFacturaDe = async (user) => {
    try {
      console.log(user);
      const res = await registerfactde(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarBoleta = async (user) => {
    try {
      console.log(user);
      const res = await registerBol(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarPfactura = async (user) => {
    try {
      console.log(user);
      const res = await registerPfact(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarPBoleta = async (user) => {
    try {
      console.log(user);
      const res = await registerPBol(user)
      return res
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarCuotas = async (user) => {
    try {
      const res = await registerCuotas(user)
      return res
    } catch (error) {
      console.log("hola",error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const registrarContado = async (user) => {
    try {
      const id_login=JSON.parse(localStorage.getItem('loggindata'))
      user.tipo_serv=dataRecibo.form_pago
      user.nrodoc_destinatario=dataRecibo.ruc_dest
      user.tipo_doc_destinatario=dataRecibo.tipo_doc_dest
      user.id_login=id_login.id
      const res = await registerRequest2(user)
      return res
    } catch (error) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
      window.localStorage.setItem(
        'loggindata', JSON.stringify(res.data)
      )
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const signinRUC = async (user) => {
    try {
      console.log(user)
      const res = await loginRequest2(user)
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
      window.localStorage.setItem(
        'loggindata', JSON.stringify(res.data)
      )
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }
  useEffect(() => {
    const credentials = window.localStorage.getItem('loggindata')
    if (!credentials) {
      setIsAuthenticated(false)
      setUser(null)
      setLoading(false)
      return
    }
    setIsAuthenticated(true)
    const dataUser = JSON.parse(credentials)
    setUser(dataUser)
    setLoading(false)
    //setUser() asignar data user
  }, [])
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])
  return (
    <LoginContext.Provider value={{
      signin,
      registrar,
      signinRUC,
      isAuthenticated,
      errors,
      loading,
      setDataRecibo,
      registrarCuotas,
      registrarFactura,
      registrarBoleta,
      registrarPfactura,
      registrarPBoleta,
      registrarFacturaDe,
      registrarFacturaCu,
      registrarContado
    }}>
      {children}
    </LoginContext.Provider>
  )
}