import React from 'react'
import { useLogin } from '../context/LoginContext'

function MenuPage() {
  const {isAuthenticated} = useLogin()

  console.log(isAuthenticated)
  return (
    <div>
      MENUPRINCIPAL
      <div className='text-4xl'>
        asdasda
      </div>
    </div>
  )
}

export default MenuPage