import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { LoginProvider } from './context/LoginContext'
import HomePage from './pages/HomePage'
import ProtectedRoute from './ProtectedRoute'
import ReciboxHPage from './pages/ReciboxHPage'
import MenuPage from './pages/MenuPage'
import ContadoPage from './pages/ContadoPage'
import CreditoPage from './pages/CreditoPage'
import RegistrarPage from './pages/RegistrarPage'
import { ReciboxHProvider } from './context/ReciboxHContext'

export default function App() {
  return (
    <LoginProvider>
      <ReciboxHProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/regis' element={<RegistrarPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='menu' element={<MenuPage />} />
              <Route path='rxh' element={<ReciboxHPage />} />
              <Route path='cont' element={<ContadoPage />} />
              <Route path='cre' element={<CreditoPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReciboxHProvider>
    </LoginProvider>
  )
}
