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
import { dataBoleta, dataLogRequest, dataPBoleta } from '../api/login';
import { dataCuota } from '../api/login';
import TemplateTablaVertical from './TemplateTablaVertical';
import TemplateTablaVerticalp from './TemplateTablaVerticalp';
import TemplateTablaVerticalpb from './TemplateTablaverticalpb';
import xmlPath from '../assets/pdfs/xmlboleta.xml';
import { useReciboxH } from '../context/ReciboxHContext';
import { validaRUC } from '../api/validarDocs'
import { useNavigate } from 'react-router-dom';

function PreBoleta() {

  const { dataUser } = useReciboxH()
  const [dataReceptor5, setDataReceptor5] = useState([])
  const [datareceptor, setDataReceptor] = useState([])
  const [datareceptor2, setDataReceptor2] = useState([])
  const [datareceptor4, setDataReceptor4] = useState([])
  const navigate = useNavigate();

  const getinfoPBoleta = async () => {
    const TablaCuota = await dataPBoleta()
    setDataReceptor5(TablaCuota.data)
  }

  const getinfoBoleta = async () => {
    const TablaCuota = await dataBoleta()
    setDataReceptor4(TablaCuota.data[0])
  }

  useEffect(() => {
    getinfoPBoleta()
    getinfoBoleta()

    if (dataUser.ruc) {
      getinfoRUCrs(dataUser.ruc)
    }
    if (datareceptor4.RUC) {
      getinfoRUC2(datareceptor4.RUC)
    }
  }, []);

  const getinfoRUCrs = async (ruc) => {
    const data = await validaRUC(ruc)
    setDataReceptor(data.data)

  }

  const getinfoRUC2 = async (ruc) => {
    const data = await validaRUC(ruc)
    setDataReceptor2(data.data)
  }

  const handlePrint = () => {
    window.print();
  };

  const onSubmitMenu = () => {
    navigate('/menu')
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
          <h1 className="titulo" style={{ border: '2px solid #000000', color: 'black', fontSize: '14px', fontWeight: 'bolder', fontFamily: 'Arial, Helvetica, sans-serif' }}>PRELIMINAR DE BOLETA ELECTRÓNICA</h1>
        </div>

        <div className="separador1" style={{ border: '2px solid #000000', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '3px', paddingTop: '0px' }}>
          <div className="empresa" style={{ paddingRight: '20px', paddingLeft: '10px' }}>
            <br></br>
            <h1 className="subtitulo" style={{ color: '#707070', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor.razonSocial}</h1>
            <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor.direccion}</h1>
          </div>
          <div className="factura" style={{ alignItems: 'right', border: '2px solid #000000', paddingTop: '0px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '0px', width: '20%', marginRight: '10px' }}>
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>BOLETA ELECTRONICA</h1>
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>RUC: {datareceptor.ruc}</h1>
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>EB01-1</h1>
          </div>
        </div>

        <div className="separador2" style={{ border: '2px solid #000000', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', marginTop: '5px', paddingTop: '2px' }}>
          <div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Fecha de Vencimiento</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor4.fecha_vencimiento}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Fecha de Emisión</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor4.fecha_emision}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Señor(es)</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor4.nombre}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Documento</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor4.numero_documento}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Tipo de Moneda</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor4.tm}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Observación</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>-------------------------------</h1>
            </div>
          </div>
          <div className="subseparador" style={{ alignItems: 'right', textAlign: 'right', display: 'flex', width: '30%', margin: '7px auto' }}>
            <h1 className="subcontenido" style={{ textAlign: 'right', fontWeight: 'bold', display: 'flex', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', maxWidth: '100px', padding: '10px' }}>Forma de Pago</h1>
            <h1 className="subcontenido" style={{ textAlign: 'right', fontWeight: 'bold', display: 'flex', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', maxWidth: '100px', padding: '10px' }}>:</h1>
            <h1 className="subcontenido" style={{ textAlign: 'right', display: 'flex', color: 'black', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', maxWidth: '100px', padding: '10px' }}>Contado</h1>
          </div>
        </div>

        <div class="p-2 border-t-3 border-l-3 shadow-md mt-5" style={{ border: '2px solid #000000', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1' }}>
          <div class="productos">
            <TemplateTablaVerticalpb dato={dataReceptor5} />
          </div>
        </div>

        <div className="separador4" style={{ border: '2px solid #000000', textAlign: 'right', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', marginTop: '5px', paddingTop: '2px' }}>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 0.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Op. Gravada</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Op. Exonerada</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Op. Inafecto</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ {datareceptor4.total_isc}</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>ISC</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ {datareceptor4.total_igv}</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>IGV</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 0.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Otros Cargos</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Otros Tributos</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ {datareceptor4.total}</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', width: '120px', fontWeight: '800' }}>Importe Total</h1>
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
          <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold print:hidden" style={{ margin: '0 10px', padding: '8px 16px' }} onClick={onSubmitMenu}>Cerrar</button>
        </div>
      </div>

    </div>
  )
}

export default PreBoleta