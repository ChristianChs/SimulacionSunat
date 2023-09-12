import React from 'react';
import ExamplePDF from './ExamplePDF'
import ExamplePreviewContado from './ExamplePreviewContado';

function PreviPage() {
    return(
    <div class="bg-white txt-black border-4 border-white text-black">
      <div className="container mx-auto mt-4">
      <div className="flex uppercase">
        <div className="flex flex-col">
          <p className="font-bold text-xl">FLORES TICONA ALEX JAVIER</p>
          <p className="text-sm">MZA. H LOTE. 06 A.V. LA PRADERA III ET TACNA - TACNA - CRL. GREG. ALBARRACIN LANCHIPA</p>
          <p className="text-sm">TELÉFONO</p>
        </div>
        <div className="border border-slate-900 w-[350px] justify-center items-center flex flex-col">
          <div className="flex justify-center">
            <p className="text-sm">R.U.C.&nbsp;</p>
            <p className="text-sm">10758544821</p>
          </div>
          <p className="text-sm text-center">RECIBO POR HONORARIOS ELECTRONICO</p>
          <p className="text-sm text-center">Nro: E001-37</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-sm flex mb-2">
          <p className="font-bold">Recibí de:&nbsp;</p>
          <p className="uppercase">EULER SMART CLASS S.A.C</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Identificado con&nbsp;</p>
          <p className="uppercase">RUC</p>
          <p className="font-bold">&nbsp;número&nbsp;</p>
          <p className="uppercase">20607257664</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Domiciliado en&nbsp;</p>
          <p className="uppercase">CAL. SIMON BOLIVAR NRO. 503 TACNA - TACNA - TACNA</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Forma de pago:&nbsp;</p>
          <p className="uppercase">AL CONTADO</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">La suma de:&nbsp;</p>
          <p className="uppercase">QUINIENTOS SETENTA Y 00/100 SOLES</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Por concepto&nbsp;</p>
          <p className="uppercase">DICTADO DE CLASES DE QUIMICA</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Observación&nbsp;</p>
          <p className="uppercase">-</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Inciso&nbsp;</p>
          <p className="uppercase">"A"</p>
          <p className="font-bold uppercase">&nbsp;DEL ARTÍCULO 33 DE LA LEY DEL IMPUESTO A LA RENTA</p>
        </div>

        <div className="text-sm flex mb-2">
          <p className="font-bold">Fecha de emisión&nbsp;</p>
          <p>11 de Septiembre de 2023</p>
        </div>
      </div>

      <div className="mt-10 text-sm flex flex-col justify-center items-center">
        <div className="grid grid-cols-2">
          <p className="font-bold mr-2">Total por honorarios:</p>
          <p className="font-bold">570.00</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="font-bold mr-2">Retención (8 %) IR:</p>
          <p className="font-bold">0.00</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="font-bold mr-2">Total Neto Recibido: </p>
          <p>570.00 SOLES</p>
        </div>
      </div>
      </div>
      <center>
        <ExamplePreviewContado/>
        <ExamplePDF/>
        <button className='bg-red-900 hover:bg-red-500 text-white font-bold p-2'>Cancelar</button>
      </center>
    </div>

    );
}

export default PreviPage;