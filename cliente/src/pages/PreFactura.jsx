import React from 'react'
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

function PreFactura() {

  return (
    <div className="containerprin" style={{paddingTop: '15px', paddingBottom: '15px'}}>
        <div className="container" style={{ border: '2px solid #000000', padding: '20px', width: '80%', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
      <div className="preliminar" style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Helvetica-Bold', textAlign: 'center', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px' }}>
        <h1 className="titulo" style={{ border: '2px solid #000000', color: 'black', fontSize: '14px', fontWeight: 'bolder', fontFamily: 'Arial, Helvetica, sans-serif' }}>PRELIMINAR DE FACTURA ELECTRÓNICA</h1>
      </div>

      <div className="separador1" style={{ border: '2px solid #000000', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '3px', paddingTop: '0px' }}>
        <div className="empresa" style={{ paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="subtitulo" style={{ color: '#707070', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>INVERSIONES PEREZ</h1>
          <h1 className="subtitulo" style={{ color: '#707070', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>PEREZ SALAZAR WILDER ABRAHAN</h1>
          <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>AV. NUEVO CAJAMARCA 793 BAR. MOLLEPAMPA BAJA INTERSEC. CON HEROES DEL CENEPA</h1>
          <h1 className="contenido" style={{ fontWeight: 'bold', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>CAJAMARCA - CAJAMARCA - CAJAMARCA</h1>
        </div>
        <div className="factura" style={{ alignItems: 'right', border: '2px solid #000000', paddingTop: '0px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '0px', width: '20%', marginRight: '10px' }}>
          <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>FACTURA ELECTRÓNICA</h1>
          <h1 className="titulo" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>RUC: 10403401272</h1>
        </div>
      </div>

      <div className="separador2" style={{ border: '2px solid #000000', paddingBottom: '1px', display: 'flex', justifyContent: 'space-between', marginTop: '5px', paddingTop: '2px' }}>
        <div>
          <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Fecha de Emisión</h1>
            <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
            <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>03/03/2023</h1>
          </div>
          <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Señor(es)</h1>
            <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
            <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>SEBASTIAN LINARES CHUPAGANPIS123</h1>
          </div>
          <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>RUC</h1>
            <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold',marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
            <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>10468022481</h1>
          </div>
          <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Dirección del Cliente</h1>
            <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
            <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>JR. S. C. JESUS 416 A 2 CUADRAS DEL IE SAGRADO CORAZON CAJAMARCA-CHOTA-CHOTA</h1>
          </div>
          <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Tipo de Moneda</h1>
            <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
            <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>SOLES</h1>
          </div>
          <div className="detalle" style={{ display: 'flex', alignItems: 'left', width: '100%', margin: '0 auto', paddingRight: '20px', paddingLeft: '10px' }}>
            <h1 className="contenido1" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>Observación</h1>
            <h1 className="contenido2" style={{ color: '#707070', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '30px', paddingRight: '30px' }}>:</h1>
            <h1 className="contenido3" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>OPERACIÓN SUJETA AL SISTEMA DE PAGO DE OBLIGACIONES TRIBUTARIAS</h1>
          </div>
        </div>
        <div className="subseparador" style={{ alignItems: 'right', textAlign: 'right', display: 'flex', width: '30%', margin: '7px auto' }}>
          <h1 className="subcontenido" style={{ textAlign: 'right', fontWeight: 'bold', display: 'flex', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', maxWidth: '100px', padding: '10px' }}>Forma de Pago</h1>
          <h1 className="subcontenido" style={{ textAlign: 'right', fontWeight: 'bold', display: 'flex', color: '#707070', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', maxWidth: '100px', padding: '10px' }}>:</h1>
          <h1 className="subcontenido" style={{ textAlign: 'right', display: 'flex', color: 'black', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', maxWidth: '100px', padding: '10px' }}>Contado</h1>
        </div>
      </div>

      <div className="separador3" style={{ border: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', marginTop: '5px', paddingTop: '2px', height: '150px', maxHeight: '500px', paddingRight: '7px', paddingLeft: '7px' }}>
        <table className="tabla" style={{color: 'black',borderCollapse: 'collapse', width: '100%' }} border="1">
          <tr>
            <th>Cantidad</th>
            <th>Unidad Medida</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>ICBPER</th>
          </tr>
          <tr>
            <td>1.00</td>
            <td>UNIDAD</td>
            <td>TRANSPORTE DE CARGA DE LIMA A CHICLAYO</td>
            <td>1594.915</td>
            <td>0.00</td>
          </tr>
        </table>
      </div>

      <div className="separador4" style={{ border: '2px solid #000000', textAlign: 'right', borderTop: '2px solid #000000', borderLeft: '2px solid #000000', boxShadow: '1px 1px 1px #f2f1f1', paddingBottom: '1px', marginTop: '5px', paddingTop: '2px' }}>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 440.68</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Sub Total Ventas</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Anticipos</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Descuentos</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 440.68</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Valor Venta</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>ISC</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 79.32</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>IGV</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>ICBPER</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Otros Cargos</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Otros Tributos</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 00.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Monto de Redondeo</h1>
        </div>
        <div className="monto" style={{ display: 'flex', flexDirection: 'row-reverse', textAlign: 'right', margin: '0 0', paddingRight: '20px', paddingLeft: '10px' }}>
          <h1 className="mcontenido3" style={{ color: '#aea9a9', border: '1px solid #ccc', backgroundColor: '#d7d5d5', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '100px' }}>S/ 520.00</h1>
          <h1 className="mcontenido2" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>:</h1>
          <h1 className="mcontenido1" style={{ color: '#000000', marginBottom: '10px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', width: '120px' }}>Importe Total</h1>
        </div>
      </div>

      <div className="buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold" style={{ margin: '0 10px', padding: '8px 16px'}}>Descargar PDF</button>
      <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold" style={{ margin: '0 10px', padding: '8px 16px'}} >Descargar XML</button>
      <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold" style={{ margin: '0 10px', padding: '8px 16px'}} >Imprimir</button>
      <button className="bg-indigo-950 text-white shadow-lg shadow-cyan-500/50 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out px-4 py-2 font-bold" style={{ margin: '0 10px', padding: '8px 16px'}}>Cerrar</button>
      </div>
    </div>
    
    </div>
  )
}

export default PreFactura