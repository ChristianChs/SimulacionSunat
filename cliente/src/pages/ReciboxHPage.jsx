import React from 'react'
import { useLogin } from '../context/LoginContext'

function ReciboxHPage() {
  const {isAuthenticated}=useLogin()
  return (
    <div>ReciboxHPage</div>
  )
}

export default ReciboxHPage