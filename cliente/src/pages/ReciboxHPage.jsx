import React from 'react'
import { useLogin } from '../context/LoginContext'

function ReciboxHPage() {
  const {isAuthenticated}=useLogin()
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <section className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md">
        <h2 className="text-2xl font-bold text-center text-yellow-100 mb-6">
          Emisión del Recibo por Honorarios Electrónico
        </h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg" >
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">Formas de Pago</h1>
            <form action="submit.php" method="post">
              <div className="mb-2">
                <input type="radio" id="free" name="free" value="si" className="hidden" />
                <label htmlFor="free" className="flex items-center cursor-pointer font-sans font-bold text-gray-400">
                  <span className="w-4 h-4 border border-yellow-100 rounded-full mr-2 "></span>
                  Al Contado
                </label>
              </div>
              <div>
                <input type="radio" id="not_free" name="free" value="no" className="hidden" />
                <label htmlFor="not_free" className="flex items-center cursor-pointer font-sans font-bold text-gray-400">
                  <span className="w-4 h-4 border border-yellow-100 rounded-full mr-2"></span>
                  Al Crédito
                </label>
              </div>
            </form>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              Indique los datos del usuario al que le prestó el servicio:
            </h1>
            <h1 className="text-base font-bold text-gray-400 mb-3">
              Tipo de Documento de Identidad del Usuario
            </h1>
            <select className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
              <option value="1">DNI</option>
              <option value="2">CARNET DE EXTRANJERÍA</option>
              <option value="3">RUC</option>
              <option value="4">PASAPORTE</option>
              <option value="5">CED. DIPLOMÁTICA DE IDENTIDAD</option>
            </select>
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              placeholder="Documento"
            />
            <div className="flex justify-end">
            <input type="submit" value="Validar" className=" bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-6 hover:bg-yellow-200 hover:font-bold hover:px-6" />
            </div>
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              placeholder="Nombre o Razón Social del Usuario"
              disabled
            />
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              placeholder="Domicilio del Usuario"
              disabled
            />
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <input type="submit" value="Enviar" className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7" />
          <input type="submit" value="Cancelar" className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-bold hover:px-7" />
        </div>
      </section>
    </div>
  )
}

export default ReciboxHPage