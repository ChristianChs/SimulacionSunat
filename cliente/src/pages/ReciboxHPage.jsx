import React, { useEffect, useState } from 'react'
import { useReciboxH } from '../context/ReciboxHContext';
import { Link, useNavigate } from 'react-router-dom'

function ReciboxHPage() {
  const navigate = useNavigate()
  const { consultaRUC,isContinue,isDestinatario, errors: ValidarRUCErrors,setDataRecibo } = useReciboxH()
  const [selectedOption, setSelectedOption] = useState('4');
  const [documentNumber, setDocumentNumber] = useState('')
  const [selectedValue, setSelectedValue] = useState({
    checked: null
  });
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDocumentChange = (event) => {
    setDocumentNumber(event.target.value);
  };

  const handleRadioChange = e => {
    setSelectedValue({
      checked: e.target.value
    })
  };

  const onSubmit = async() => {
    if (selectedOption === '4') {
      await consultaRUC(documentNumber)
    }
  }

  const onSubmit2 = async()=>{
    const data = {
      "ruc_dest":documentNumber,//nro doc
      "tipo_doc_dest":selectedOption,//ruc dni
      "form_pago":selectedValue.checked //contado credito
    }
    setDataRecibo(data)
    if(selectedValue.checked==="1"){
      navigate('/cont')
    }else{
      navigate('/cre')
    }
  }

  const onSubmit3 = () => {
    navigate('/menu')
  };

  useEffect(()=>{
    setDataRecibo(null)
  })

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <section className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md">
        <h2 className="text-2xl font-bold text-center text-yellow-100 mb-6">
          Emisión del Recibo por Honorarios Electrónico
        </h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg" >
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">Formas de Pago</h1>

            <div className="mb-2">

              <label htmlFor="free" className="flex items-center cursor-pointer font-sans font-bold text-gray-400">
                <input
                  className='w-4 h-4 border border-yellow-100 rounded-full mr-2'
                  type="radio"
                  value="1"
                  id='free'
                  checked={selectedValue.checked === '1'}
                  onChange={handleRadioChange}
                />
                Al Contado
              </label>
            </div>
            <div>
              <label htmlFor="not_free" className="flex items-center cursor-pointer font-sans font-bold text-gray-400">
                <input
                  className='w-4 h-4 border border-yellow-100 rounded-full mr-2'
                  type="radio"
                  value="0"
                  id='not_free'
                  checked={selectedValue.checked === '0'}
                  onChange={handleRadioChange}
                />
                Al Crédito
              </label>
            </div>

          </div>
          <div className="col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              Indique los datos del usuario al que le prestó el servicio:
            </h1>
            <h1 className="text-base font-bold text-gray-400 mb-3">
              Tipo de Documento de Identidad del Usuario
            </h1>
            {
              ValidarRUCErrors.map((error, i) => (
                <div className='w-full py-2 px-3 border border-red-300 bg-red-600 rounded-md mb-2 font-sans font-semibold text-white focus:border-yellow-100' key={i}>
                  {error}
                </div>
              ))
            }
            <select value={selectedOption} onChange={handleOptionChange} className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
              <option value="2">DNI</option>
              <option value="3">CARNET DE EXTRANJERÍA</option>
              <option value="4">RUC</option>
              <option value="5">PASAPORTE</option>
              <option value="6">CED. DIPLOMÁTICA DE IDENTIDAD</option>
            </select>
            <input
            id="documento_numero"
              onChange={handleDocumentChange}
              type="text"
              className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              placeholder="Documento"
            />
            <div className="flex justify-end">
              <input
                type="button"
                onClick={onSubmit}
                value="Validar"
                className=" bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-6 hover:bg-yellow-200 hover:font-bold hover:px-6" />
            </div>
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              placeholder="Nombre o Razón Social del Usuario"
              value={ isDestinatario?isDestinatario.razonSocial:''}
              disabled
            />
            {

              selectedValue.checked === '0' ? (<input
                type="text"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                placeholder="Domicilio del Usuario"
                value={isDestinatario?isDestinatario.direccion===null?'-':isDestinatario.direccion:''}
                disabled
              />) : null
            }

          </div>
        </form>
            
        <div className="flex justify-center mt-6">
          {
            isContinue ? (
            <input 
              type="submit" 
              value="Enviar" 
              onClick={onSubmit2} 
              className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7" 
            />) : null
          }
          <input 
            type="submit" 
            value="Cancelar" 
            className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-bold hover:px-7" 
            onClick={onSubmit3}
            />
        </div>
      </section>
    </div>
  )
}

export default ReciboxHPage