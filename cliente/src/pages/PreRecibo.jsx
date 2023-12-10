import React, { useState, useEffect } from 'react'
import FacturaPDF from '../components/FacturaPDF'
import TempleteXML from '../components/TemplateXML'
import { PDFViewer } from '@react-pdf/renderer'
import { Link } from 'react-router-dom';
import Stars from '../components/Stars';
import Modal from '../components/Modal'
import Imagen1 from '../assets/images/flecha.png';
import Imagen2 from '../assets/images/pdf.jpg';
import Imagen3 from '../assets/images/xml.png';
import { dataLogRequest } from '../api/login';
import { dataCuota } from '../api/login';
import TemplateTablaVertical from './TemplateTablaVertical';
import TemplateTablaVerticalp from './TemplateTablaVerticalp';
import TemplateTablaVerticalpb from './TemplateTablaverticalpb';
import xmlPath from '../assets/pdfs/xmlboleta.xml';


function PreRecibo() {


  const [dataReceptor5, setDataReceptor5] = useState([])

  const getinfoCuota = async () => {
    const TablaCuota = await dataCuota()
    console.log("asdasdsa", TablaCuota.data)
    setDataReceptor5(TablaCuota.data)
  }

  useEffect(() => {
    getinfoCuota()
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const [data, setData] = useState([
    { nroCuota: "1", fechaCuota: "15/25/2023", montoCuota: "5000" },
    { nroCuota: "2", fechaCuota: "16/25/2023", montoCuota: "8000" },
    { nroCuota: "1", fechaCuota: "15/25/2023", montoCuota: "5000" },
    { nroCuota: "2", fechaCuota: "16/25/2023", montoCuota: "8000" },
    { nroCuota: "1", fechaCuota: "15/25/2023", montoCuota: "5000" },
    { nroCuota: "2", fechaCuota: "16/25/2023", montoCuota: "8000" },
  ])

  return (

    <div className="containerprin" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
      <div className="container" style={{ border: '2px solid #000000', padding: '20px', width: '80%', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
        <div className="preliminar print:hidden" style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Helvetica-Bold', textAlign: 'center', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px' }}>
          <h1 className="titulo" style={{ border: '2px solid #000000', color: 'black', fontSize: '14px', fontWeight: 'bolder', fontFamily: 'Arial, Helvetica, sans-serif' }}>PRELIMINAR RECIBO POR HONORARIOS</h1>
        </div>

        <div className="separador1" style={{ border: '2px solid #000000', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '3px', paddingTop: '0px' }}>
          <div className="empresa" style={{ paddingRight: '20px', paddingLeft: '10px' }}>
            <br></br>
            <h1 className="subtitulo" style={{ color: '#707070', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>PEREZ SALAZAR WILDER ABRAHAN</h1>
            <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>AV. NUEVO CAJAMARCA 793 BAR. MOLLEPAMPA BAJA INTERSEC. CON HEROES DEL CENEPA</h1>
            <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>915658234</h1>
            
          </div>
          <div className="factura" style={{ alignItems: 'right', border: '2px solid #000000', paddingTop: '0px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '0px', width: '20%', marginRight: '10px' }}>
            
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>RECIBO POR HONORARIOS</h1>
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>RUC: 10403401272</h1>
          </div>
        </div>

        <div className="separador2" style={{ border: '2px solid #000000', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', marginTop: '5px', paddingTop: '2px' }}>
          <div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Recibí de</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>Noticia del contador S.A.C.</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Identificado con</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>RUC</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Número</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>189156123</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>La suma de </h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>CIEN Y 00/100 NUEVOS SOLES</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Por concepto de</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>SERVICIO DE ASESORIA EMPRESARIAL</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Observación</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>"A" DEL ARTICULO 33 DE LA LEY DEL IMPUESTO A LA RENTA</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Fecha</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>01 de Octubre del 2014</h1>
            </div>
          </div>
        </div>

        <div className="separador4" style={{ border: '2px solid #000000', textAlign: 'right', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', marginTop: '5px', paddingTop: '2px' }}>
          <br></br>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 100.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Total por Honorarios</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 0.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Retencion (10%) IR </h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/100.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Total Neto Recibido</h1>
          </div>
        </div>

        <div class="p-2 border-t-3 border-l-3 shadow-md mt-5" style={{ border: '2px solid #000000', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1' }}>
          <div class="cuotas">
            <TemplateTablaVertical dato={dataReceptor5} />
          </div>
        </div>

        <div className="buttons" 
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
        
        >
        <button
        className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold print:hidden"
        style={{ margin: '0 10px', padding: '8px 16px' }}
        onClick={handlePrint}
      >
        Descargar PDF o Imprimir
      </button>
          <a className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold print:hidden" style={{ margin: '0 10px', padding: '8px 16px' }} href={xmlPath} download="boleta.xml">Descargar XML</a>
          <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold print:hidden" style={{ margin: '0 10px', padding: '8px 16px' }}>Cerrar</button>
        </div>
      </div>

    </div>
  )
}

export default PreRecibo