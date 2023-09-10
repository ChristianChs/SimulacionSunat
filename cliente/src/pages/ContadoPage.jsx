import React from 'react';

function ContadoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-secondary">
      <div className="w-full md:w-2/3 p-8 bg-secondary text-primary rounded-lg shadow-md overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Emisión del Recibo por Honorarios Electrónico</h1>
        <form action="submit.php" method="post">
          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="free">
              El Servicio se Prestó a Título Gratuito:
            </label>
            <input type="radio" id="free" name="free" value="si" className="mr-2" />
            <label htmlFor="free">SI</label>
            <input type="radio" id="not_free" name="free" value="no" className="mr-2" />
            <label htmlFor="not_free">NO</label>
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="description">
              Descripción o Título de Servicio Prestado:
            </label>
            <input
              id="description"
              name="description"
              type="text"
              aria-label="default input example"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="observation">
              Observación (Opcional):
            </label>
            <input
              id="observation"
              name="observation"
              type="text"
              aria-label="default input example"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="date_issue">
              Fecha de Emisión:
            </label>
            <input type="date" id="date_issue" name="date_issue" className="w-full p-2 border rounded" />
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="date_expiration">
              Fecha de Vencimiento (Opcional):
            </label>
            <input
              type="date"
              id="date_expiration"
              name="date_expiration"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="free">
              Indique el tipo de Renta de Cuarta Categoría, de acuerdo al inciso aplicable del artículo 33 LIR:
            </label>
            <input
              type="radio"
              id="free"
              name="free"
              value="si"
              className="mr-2"
            />
            <label htmlFor="free">
              Inciso A: El ejercicio individual, de acuerdo profesión, arte, ciencia, oficio o actividades no incluidas expresamente en la tercera categoría
            </label>
            <br></br>
            <input
              type="radio"
              id="not_free"
              name="free"
              value="no"
              className="mr-2"
            />
            <label htmlFor="not_free">
              Inciso B: El desempeño de funciones de funciones de director de empresas, síndico, mandatario, gestor de negocios, albacea y actividades similares, incluyendo el desempeño de las funciones del consejero regional, por las cuales perciban dietas
            </label>
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="free">
              Retención del Impuesto a la Renta:
            </label>
            <input
              type="radio"
              id="free"
              name="free"
              value="si"
              className="mr-2"
            />
            <label htmlFor="free">SI</label>
            <input
              type="radio"
              id="not_free"
              name="free"
              value="no"
              className="mr-2"
            />
            <label htmlFor="not_free">NO</label>
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="free">
              ¿El pago total del servicio está siendo efectuado al momento de la emisión de este comprobante?
            </label>
            <input
              type="radio"
              id="free"
              name="free"
              value="si"
              className="mr-2"
            />
            <label htmlFor="free">SI</label>
            <input
              type="radio"
              id="not_free"
              name="free"
              value="no"
              className="mr-2"
            />
            <label htmlFor="not_free">NO</label>
          </div>
          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <select className="w-full p-2 border rounded mb-4" aria-label="Default select example">
                <option selected>-- Seleccione Medio de Pago --</option>
                <option value="1">Depósito de Cuenta</option>
                <option value="2">Giro</option>
                <option value="3">Transferencia de Fondos</option>
                <option value="4">Orden de Pago</option>
                <option value="5">Tarjeta de Débito</option>
                <option value="6">Tarjeta de Crédito emitida en el país por una empresa del Sistema Financiero</option>
                <option value="7">Cheques con Claúsula: No negociables - Intransferibles - No a la orden o similar</option>
                <option value="8">Efectivo - Por operaciones donde no existe obligación de utilizar Medios de Pago</option>
                <option value="9">Efectivo - en los demás casos</option>
                <option value="10">Medios de Pago Usados en Comercio Exterior</option>
                <option value="11">Documentos de EDPYMES y Cooperativas de Ahorro y Crédito</option>
                <option value="12">Tarjeta de Crédito emitida o no en el país por entes ajenos al Sistema F.</option>
                <option value="13">Tarjetas de Crédito emitidas en el exterior por bancos o F. no domiciliadas</option>
            </select>
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="free">
              Indique el monto de los Honorarios
            </label>
            <h1 className="mb-2">Tipo de Moneda</h1>
            <select className="w-full p-2 border rounded" aria-label="Default select example">
              <option selected>SOL</option>
              <option value="1">DOLAR</option>
              <option value="2">EURO</option>
            </select>
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="message">
              Monto total de los honorarios:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="0.00"
              aria-label=".form-control-lg example"
            />
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="message">
              Retención (8%) Impuesto a la Renta:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="0.00"
              aria-label=".form-control-lg example"
            />
          </div>

          <div className="mb-4 col-span-2 sm:col-span-1 bg-zinc-900 p-4 rounded-lg">
            <label className="block mb-2" htmlFor="message">
              Total Neto Recibido:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="0.00"
              aria-label=".form-control-lg example"
            />
          </div>

          <input type="submit" value="Enviar" className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7" />
          <input type="submit" value="Cancelar" className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-bold hover:px-7" />
        </form>
      </div>
    </div>
  );
}

export default ContadoPage;
