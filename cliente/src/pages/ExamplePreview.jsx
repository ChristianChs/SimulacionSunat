import React, { useState } from 'react'
import TempletePDF from '../components/TemplatePDF'
import { PDFViewer } from '@react-pdf/renderer'
import Modal from '../components/Modal'


function ExamplePreview() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='m-10'>
        <p className='mb-10'>Example Preview</p>

        <button className='bg-indigo-600 hover-bg-indigo-500 p-2'
          onClick={() => setShowModal(true)}>Activar Modal</button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <PDFViewer style={{ width: '100%', height: '70vh' }}>
            <TempletePDF />
          </PDFViewer>
          <div className='flex justify-center mt-6'>
          <button className='bg-blue-400 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7"'>Regresar</button>
          <button className='bg-blue-400 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7"'>CONFIRMAR </button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default ExamplePreview