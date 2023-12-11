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
import { dataFactura, dataPFactura, dataFacturaC, dataFacturaD } from '../api/login';
import { validaRUC } from '../api/validarDocs'
import TemplateTablaVertical from './TemplateTablaVertical';
import TemplateTablaVerticalp from './TemplateTablaVerticalp';
import TemplateTablaVerticalpb from './TemplateTablaverticalpb';
import xmlPath from '../assets/pdfs/xmlboleta.xml';
import { useReciboxH } from '../context/ReciboxHContext';
import { useNavigate } from 'react-router-dom';


function PreRecibo() {

  const { dataUser } = useReciboxH()
  const [dataReceptor5, setDataReceptor5] = useState([])
  const [datareceptor, setDataReceptor] = useState([])
  const [datareceptor4, setDataReceptor4] = useState([])
  const [datareceptor3, setDataReceptor3] = useState(null)
  const [resultado, setResultado] = useState("");
  const [datareceptor2, setDataReceptor2] = useState([])
  const [user, setUser] = useState([])
  const navigate = useNavigate();


  const getData = async () => {
    const id_login = JSON.parse(localStorage.getItem('loggindata'))
    const datos = await dataLogRequest({ "id_login": id_login.id })
    setUser(datos.data)
  }

  const getinfoCuota = async () => {
    const TablaCuota = await dataCuota()
    console.log("asdasdsa", TablaCuota.data)
    setDataReceptor5(TablaCuota.data)
  }


  useEffect(() => {
    getData()
    getinfoCuota()
    getinfoC(user.inciso_cat)
    convertirNumeroALetras(user.total_neto);
  }, []);

  console.log(user)

  const getinfoC = async (data) => {
    if (data == 0) {
      setDataReceptor3("A")
    }
    else {
      setDataReceptor3("B")
    }
  }


  const getinfoRUCrs = async (ruc) => {
    const data = await validaRUC(ruc)
    setDataReceptor(data.data)
  }


  const getinfoRUC2 = async (ruc) => {
    const data = await validaRUC(ruc)
    setDataReceptor2(data.data)
  }
  const onSubmitMenu = () => {
    navigate('/menu')
  };

  useEffect(() => {
    getinfoRUCrs(dataUser.ruc);
  }, [dataUser.ruc]);

  useEffect(() => {
    getinfoRUC2(user.nrodoc_destinatario);
  }, [user.nrodoc_destinatario]);

  function numeroAtexto(numero) {
    const unidades = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"];
    const decenas = ["", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
    const especiales = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
    const centenas = ["", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];

    if (numero >= 0 && numero < 10) {
      return unidades[numero];
    } else if (numero >= 10 && numero < 20) {
      return especiales[numero - 10];
    } else if (numero >= 20 && numero < 100) {
      const unidad = numero % 10;
      const decena = Math.floor(numero / 10);
      if (unidad === 0) {
        return decenas[decena];
      } else {
        return decenas[decena] + " Y " + unidades[unidad];
      }
    } else if (numero >= 100 && numero < 1000) {
      const centena = Math.floor(numero / 100);
      const resto = numero % 100;
      if (resto === 0) {
        return centenas[centena];
      } else {
        return centenas[centena] + " " + numeroAtexto(resto);
      }
    } else if (numero < 1000000) {
      const miles = Math.floor(numero / 1000);
      const resto = numero % 1000;
      if (resto === 0) {
        return numeroAtexto(miles) + " MIL";
      } else {
        return numeroAtexto(miles) + " MIL " + numeroAtexto(resto);
      }
    } else if (numero < 1000000000) {
      const millones = Math.floor(numero / 1000000);
      const resto = numero % 1000000;
      if (resto === 0) {
        return numeroAtexto(millones) + " MILLONES";
      } else {
        return numeroAtexto(millones) + " MILLONES " + numeroAtexto(resto);
      }
    } else {
      return "Número fuera de rango";
    }
  }

  function convertirNumeroALetras(numeroInput) {
    if (!isNaN(numeroInput)) {
      const numero = parseInt(numeroInput);
      if (numero >= 0 && numero <= 999999999) {
        const texto = numeroAtexto(numero);
        setResultado(texto);
      } else {
        setResultado("El número debe estar entre 0 y 999,999,999.");
      }
    } else {
      setResultado("Por favor, ingrese un número válido.");
    }
  }

  console.log(resultado)

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
  console.log(datareceptor2.razonSocial);

  return (

    <div className="containerprin" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
      <div className="container" style={{ border: '2px solid #000000', padding: '20px', width: '80%', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
        <div className="preliminar print:hidden" style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Helvetica-Bold', textAlign: 'center', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px' }}>
          <h1 className="titulo" style={{ border: '2px solid #000000', color: 'black', fontSize: '14px', fontWeight: 'bolder', fontFamily: 'Arial, Helvetica, sans-serif' }}>PRELIMINAR RECIBO POR HONORARIOS</h1>
        </div>

        <div className="separador1" style={{ border: '2px solid #000000', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '3px', paddingTop: '0px' }}>
          <div className="empresa" style={{ paddingRight: '20px', paddingLeft: '10px' }}>
            <br></br>
            <h1 className="subtitulo" style={{ color: '#707070', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor.razonSocial}</h1>
            <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor.direccion}</h1>
            <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor.telefono}</h1>

          </div>
          <div className="factura" style={{ alignItems: 'right', border: '2px solid #000000', paddingTop: '0px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '0px', width: '20%', marginRight: '10px' }}>

            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>RECIBO POR HONORARIOS</h1>
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>RUC: {dataUser.ruc}</h1>
            <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Nro: E001-01</h1>
          </div>
        </div>

        <div className="separador2" style={{ border: '2px solid #000000', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', marginTop: '5px', paddingTop: '2px' }}>
          <div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Recibí de</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{datareceptor2.razonSocial}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Identificado con</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>RUC</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Número</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{user.nrodoc_destinatario}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>La suma de </h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{resultado}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Por concepto de</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{user.descripcion_rxh}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Observación</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{user.obs_rxh}</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Inciso</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>"{datareceptor3}" DEL ARTICULO 33 DE LA LEY DEL IMPUESTO A LA RENTA</h1>
            </div>
            <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
              <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Fecha</h1>
              <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
              <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>{user.fecha_emision}</h1>
            </div>
          </div>
        </div>

        <div className="separador4" style={{ border: '2px solid #000000', textAlign: 'right', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', marginTop: '5px', paddingTop: '2px' }}>
          <br></br>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/{user.total_neto}</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Total por Honorarios</h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/{user.retencion_monto}</h1>
            <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
            <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Retencion (10%) IR </h1>
          </div>
          <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/{user.monto_total}</h1>
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
          <a className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold print:hidden" style={{ margin: '0 10px', padding: '8px 16px' }} href={xmlPath} download="recibo.xml">Descargar XML</a>
          <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold print:hidden" style={{ margin: '0 10px', padding: '8px 16px' }} onClick={onSubmitMenu}>Cerrar</button>
        </div>
      </div>

    </div>
  )
}

export default PreRecibo