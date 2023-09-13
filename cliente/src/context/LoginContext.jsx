import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, loginRequest2, registerCuotas, registerRequest, registerRequest2 } from "../api/login"
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

  const registrarCuota = async (user) => {
    try {
      const res = await registerCuotas(user)
      return res
    } catch (error) {
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
      registrarCuota,
      registrarContado
    }}>
      {children}
    </LoginContext.Provider>
  )
}