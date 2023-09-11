import React from 'react';
import ExamplePDF from './ExamplePDF'

function PreviPage() {
    return(
    <div class="bg-white txt-black border-4 border-white">
      <div class="container mx-auto p-4 txt-black">
        <div class="bg-white rounded-md p-4 shadow-md text-stone-950">
          <h1 class="text-2xl font-bold text-stone-950">ALEXIS DANIEL LIMACHE VILLEGAS</h1>
          <span class="block">CONO SUR MZ.C LT.40 SHA NEA</span>
          <ul class="list-none pl-0">
            <li><strong>Teléfono:</strong> XXXXX</li>
            <li><strong>Recibi de :</strong> XXXXX</li>
            <li><strong>Identificado con RUC:</strong> XXXXX</li>
            <li><strong>Domiciliado en:</strong> XXXXX</li>
            <li><strong>Tipo de Transacción:</strong> XXXXX</li>
            <li><strong>La suma de :</strong> XXXXX</li>
            <li><strong>Por concepto:</strong> XXXXX</li>
            <li><strong>Inciso:</strong> XXXXX</li>
            <li><strong>Fecha de Emisión:</strong> XXXXX</li>
          </ul>
        </div>

        <div class="fixed top-10  right-16 text-stone-950">
          <div class="border border-black p-4 w-full">
            <div class="text-center">
              <p><strong>RUC del Emisor:</strong> XXXXX</p>
              <p><strong>RECIBO POR HONORARIOS ELECTRONICO</strong></p>
            </div>
          </div>
        </div>

        <div class="mt-4 text-stone-950">
          <ul class="list-none pl-0">
            <center>
              <li><strong>Total por Honorarios:</strong> XXXXX</li>
              <li><strong>Retención (8%) IR:</strong> XXXXX</li>
              <li><strong>Total Neto Recibido:</strong> XXXXX</li>
            </center>
          </ul>
      </div>
    </div>
    <center>
      <ExamplePDF/>
      <button className='bg-red-900 hover:bg-red-500 text-white font-bold p-2'>Cancelar</button>
    </center>
  </div>

    );
}

export default PreviPage;