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
import PreviPage from './pages/PreviPage'
import { ReciboxHProvider } from './context/ReciboxHContext'
import ExamplePreviewContado from './pages/ExamplePreviewContado'
import ExamplePreviewCredito from './pages/ExamplePreviewCredito'
import Factura from './pages/Factura'
import Ejemplo from './components/ejemplo'
import Consentimiento from './pages/Consentimiento'
import Boleta from './pages/Boleta'
import FacturaInfAdd from './pages/FacturaInfAdd'
import PreFractura from './pages/PreFactura'
import TemplateCredito from './pages/TemplateCredito'
import PreBoleta from './pages/PreBoleta'
import PreRecibo from './pages/PreRecibo'
import BoletaForm from './pages/BoletaInfAdd'
import PreFacturasc from './pages/PreFacturasc'
import PreFacturasd from './pages/PreFacturasd'
import PreFacturasn from './pages/PreFacturasn'

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
              <Route path='cre' element={<CreditoPage />} />
              <Route path='prev' element={<PreviPage />} />
              <Route path='previewcont' element={<ExamplePreviewContado />} />
              <Route path='previewcre' element={<ExamplePreviewCredito />} />
              <Route path='fact' element={<Factura />} />
              <Route path='eje' element={<Ejemplo />} />
              <Route path='cons' element={<Consentimiento />} />
              <Route path='bol' element={<Boleta />} />
              <Route path='factinf' element={<FacturaInfAdd />} />
              <Route path='prefact' element={<PreFractura />} />
              <Route path='test' element={<TemplateCredito />} />
              <Route path='prebol' element={<PreBoleta />} />
              <Route path='prerec' element={<PreRecibo />} />
              <Route path='bolinf' element={<BoletaForm />} />
              <Route path='prefactsc' element={<PreFacturasc />} />
              <Route path='prefactsd' element={<PreFacturasd />} />
              <Route path='prefactsn' element={<PreFacturasn />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReciboxHProvider>
    </LoginProvider>
  )
}
