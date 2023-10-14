import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../components/Stars';
import ExamplePDF from './ExamplePDF'

function Consent() {

  return (
    <div>
  <Stars />
  <div className='min-h-screen flex flex-col items-center justify-start'>
    <section className="p-10 mt-8">

      <div className="container mx-auto mb-8 text-center">
        <h1 className="text-6xl md:text-6xl font-bold text-ffeba7 mb-4 animate-pulse text-red text-bold font-mono">
          CONSENTIMIENTO
        </h1>
      </div>

      <div className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-55 transition-transform w-110 mx-auto block">
        <div className="card__front p-4 text-center">
          <img
            className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
            src="https://contribuyentes.mx/wp-content/uploads/2019/10/sueldos-contribuyente-1024x683.jpg"
            alt="Honorarios"
          />
          <div className="flow-content gap-1 mt-6">
  <p className="card__name font-bold text-lg text-bold font-mono">Sr. Contribuyente</p>
  <p className="card__position text-sm text-bold font-mono text-white">
    Con la primera emisión de su Boleta de Venta Electrónica, obtendrá la condición de Emisor Electrónico de facturas, boletas de venta, notas de crédito y notas de débito en el Sistema de Emisión Electrónica-SOL (SEE- SOL.) El ser Emisor Electrónico tiene los siguientes efectos:
    <br /><br />
    1. La SUNAT lo sustituirá en la obligación de conservar las facturas, boletas de venta, notas de crédito y débito electrónicas emitidas a través del presente Sistema, sin perjuicio de poder realizar la descarga de los mencionados ejemplares, si así lo desea.
    <br /><br />
    2. La SUNAT, para el cumplimiento de sus funciones, podrá hacer uso de la información de las facturas, boletas de venta, notas de crédito y débito electrónicas que se conserven en el presente Sistema.
    <br /><br />
    3. Debe cumplir con las demás disposiciones previstas en la Resolución de Superintendencia Nro. 188-2010/SUNAT y normas modificatorias.
  </p>
</div>

        </div>
      </div>

    </section>
    <div className="flex justify-center mt-4">
    <Link to={'/bol'}>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Declaro tener conocimiento y acepto las condiciones apra ser Emisor Electrónico
      </button>
    </Link>
    </div>
    <div style={{ marginBottom: '20px' }}></div>

    
    <Link to={'/menu'}>
      <button className="bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded">
        Cancelar
      </button>
    </Link>
    <div style={{ marginBottom: '20px' }}></div>
    
  </div>
</div>
  );
}

export default Consent;