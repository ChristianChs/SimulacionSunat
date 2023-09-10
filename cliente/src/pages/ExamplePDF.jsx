import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import TempletePDF from '../components/TemplatePDF'

function ExamplePDF() {
  return (
    <PDFDownloadLink document={<TempletePDF />} fileName='CryReport'>
      {({ loading }) => (loading ? <button>Loading Document...</button> : <button className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold p-2'>Exportar PDF</button>)}
    </PDFDownloadLink>
  )
}

export default ExamplePDF