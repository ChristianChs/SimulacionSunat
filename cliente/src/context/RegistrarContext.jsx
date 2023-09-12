import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest } from "../api/login"
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
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signin = async (user) => {
    try {
      console.log(user)
      const res = await registerRequest(user)
      console.log(res)
      setUser(res.data)
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
      signinRUC,
      isAuthenticated,
      errors,
      loading
    }}>
      {children}
    </LoginContext.Provider>
  )
}