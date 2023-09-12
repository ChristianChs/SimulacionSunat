import React, { useEffect, useState } from 'react'
import TempletePDF from '../components/TemplatePDF'
import { PDFViewer } from '@react-pdf/renderer'
import { Link } from 'react-router-dom';
import Stars from '../components/Stars';
import Modal from '../components/Modal'
import Imagen1 from '../assets/images/flecha.png';
import Imagen2 from '../assets/images/pdf.jpg';
import Imagen3 from '../assets/images/xml.png';
import { dataLogRequest } from '../api/login';

function ExamplePreviewContado() {

    const handleCerrarSesion = () => {
    localStorage.clear();
    window.location.reload();
  };
  
  const [showModal, setShowModal] = useState(false)
  const [user,setUser]=useState(null)
  const getData = async()=>{
    const id_login=JSON.parse(localStorage.getItem('loggindata'))
    const datos=await dataLogRequest({"id_login":id_login.id})
    setUser(datos.data)
    setShowModal(true)
    /*setUser(datos.data)
    return datos.data*/
  }
  useEffect(()=>{

  },[])

  return (
    <><Stars className="stars-behind"/>
      <div className='min-h-screen flex flex-col items-center justify-start'>
        <section className="p-10 mt-8">
        <div className="container mx-auto mb-8 text-center">
          <h1 className="text-6xl md:text-6xl font-bold text-ffeba7 mb-4 animate-pulse shadow-md text-red text-bold font-mono">
            VISTA PREVIA DE RECIBOS POR HONORARIOS
          </h1>
        </div>

        <ul 
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
          >
          
          <li className='justify-center'>
            <div
              className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 hover:border-amber-200 transition-transform w-60 mx-auto block"
              onClick={() => {getData()} }
            >
              <div className="card__front p-4 text-center">
                <img
                  className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                  src={Imagen2}
                  alt="Honorarios"
                />
                <div className="flow-content gap-1 mt-6">
                  <p className="card__name font-bold text-lg text-bold font-mono">EMITIR RECIBO</p>
                  <p className="card__position text-sm text-bold font-mono text-white">En formarto PDF</p>
                </div>
              </div>
            </div>
          </li>

          <li className='justify-center'>
            <Link to={'/cont'}>
              <div
                className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 hover:border-amber-200 transition-transform w-60 mx-auto block"
              >
                <div className="card__front p-4 text-center">
                  <img
                    className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                    src={Imagen1}
                    alt="Honorarios"
                  />
                  <div className="flow-content gap-1 mt-6">
                    <p className="card__name font-bold text-lg text-bold font-mono">RETROCEDER</p>
                    <p className="card__position text-sm text-bold font-mono text-white">Actualizar los datos</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>

          <li>
          <div
            className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 hover:border-amber-200 transition-transform w-60 mx-auto block"
          >
            <div className="card__front p-4 text-center">
              <img
                className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                src={Imagen3}
                alt="Boleta de Venta"
              />
              <div className="flow-content gap-1 mt-6">
                <p className="card__name font-bold text-lg text-bold font-mono">EMITIR UN RECIBO</p>
                <p className="card__position text-sm text-bold font-mono text-white">En formato XML</p>
              </div>
            </div>
          </div>
        </li>
        </ul>

        <div className="flex justify-center mt-4">
        <button
          className="bg-transparent border border-ffeba7 text-ffeba7 hover:bg-ffeba7 hover:text-white hover:border-amber-200 font-bold py-2 px-4 rounded transition-transform transform hover:scale-125 text-bold font-mono"
          onClick={handleCerrarSesion}
        >
          Cerrar Sesión
        </button>
        </div>
          
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <PDFViewer style={{ width: '100%', height: '70vh' }}>
            <TempletePDF data={user} />
          </PDFViewer>
          <div className='flex justify-center mt-6'>
          <button className='bg-blue-400 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7"'>Regresar</button>
          <button className='bg-blue-400 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7"'>Confirmar </button>
          </div>
        </Modal>
     </section>
      </div>
      
    </>
  )
}

export default ExamplePreviewContado