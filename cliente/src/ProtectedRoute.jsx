import { useLogin } from './context/LoginContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
const {user,isAuthenticated,loading}=useLogin()
console.log(user)
if(!loading && !isAuthenticated) return <Navigate to={'/login'} replace/>
  return (
    <Outlet/>
  )
}

export default ProtectedRoute