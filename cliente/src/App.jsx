import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { LoginProvider } from './context/LoginContext'
import HomePage from './pages/HomePage'
import ProtectedRoute from './ProtectedRoute'
import ReciboxHPage from './pages/ReciboxHPage'
import MenuPage from './pages/MenuPage'

export default function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route element={<ProtectedRoute/>}>
            <Route path='menu' element={<MenuPage/>} />
            <Route path='rxh' element={<ReciboxHPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}
