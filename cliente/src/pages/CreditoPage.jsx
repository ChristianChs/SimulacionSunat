import React from 'react';

function CreditoPage() {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <section className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md">
        <h1 className="text-2xl font-bold text-center text-yellow-100 mb-6">
          Emisión del Recibo por Honorarios Electrónico
        </h1>
        <form>
          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique los datos del servicio prestado
            </h1>
            <form action="submit.php" method="post">
              <label htmlFor="description" className="text-gray-400 font-sans font-bold">
                Descripción o Título de Servicio Prestado:
              </label>
              <input
                id="description"
                name="description"
                type="text"
                aria-label="default input example"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100"
              />
              <label htmlFor="observation" className="text-gray-400 font-sans font-bold">
                Observación (Opcional):
              </label>
              <input
                id="observation"
                name="observation"
                type="text"
                aria-label="default input example"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100"
              />
              <label htmlFor="date_issue" className="text-gray-400 font-sans font-bold">
                Fecha de Emisión:
              </label>
              <input
                type="date"
                id="date_issue"
                name="date_issue"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100"
              />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              Indique el tipo de Renta de Cuarta Categoría, de acuerdo al inciso aplicable del artículo 33 LIR:
            </h1>
            <form action="submit.php" method="post">
              <input
                type="radio"
                id="free"
                name="free"
                value="si"
                className="mr-2"
              />
              <label htmlFor="free" className="text-gray-400 font-sans font-bold">
                Inciso A: El ejercicio individual, de acuerdo profesión, arte, ciencia, oficio o actividades no incluidas expresamente en la tercera categoría
              </label>
              <br />
              <input
                type="radio"
                id="not_free"
                name="free"
                value="no"
                className="mr-2"
              />
              <label htmlFor="not_free" className="text-gray-400 font-sans font-bold">
                Inciso B: El desempeño de funciones de funciones de director de empresas, síndico, mandatario, gestor de negocios, albacea y actividades similares, incluyendo el desempeño de las funciones del consejero regional, por las cuales perciban dietas
              </label>
              <br />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              Retención del Impuesto a la Renta:
            </h1>
            <form action="submit.php" method="post">
              <input
                type="radio"
                id="retention_yes"
                name="retention"
                value="yes"
                className="mr-2"
              />
              <label htmlFor="retention_yes" className="text-gray-400 font-sans font-bold">
                SI
              </label>
              <br />
              <input
                type="radio"
                id="retention_no"
                name="retention"
                value="no"
                className="mr-2"
              />
              <label htmlFor="retention_no" className="text-gray-400 font-sans font-bold">
                NO
              </label>
              <br />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              ¿El pago total del servicio está siendo efectuado al momento de la emisión de este comprobante?
            </h1>
            <form action="submit.php" method="post">
              <input
                type="radio"
                id="payment_yes"
                name="payment"
                value="yes"
                className="mr-2"
              />
              <label htmlFor="payment_yes" className="text-gray-400 font-sans font-bold">
                SI
              </label>
              <br />
              <input
                type="radio"
                id="payment_no"
                name="payment"
                value="no"
                className="mr-2"
              />
              <label htmlFor="payment_no" className="text-gray-400 font-sans font-bold">
                NO
              </label>
              <br />
              <select
                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100"
                aria-label="Medio de Pago"
              >
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
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique el monto de los Honorarios
            </h1>
            <h1 className="text-base font-bold text-gray-400 mb-3">
              Tipo de Moneda
            </h1>
            <select
              className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100"
              aria-label="Tipo de Moneda"
            >
              <option selected>SOL</option>
              <option value="1">DOLAR</option>
              <option value="2">EURO</option>
            </select>
            <form action="submit.php" method="post">
              <label htmlFor="honorarios" className="text-gray-400 font-sans font-bold">
                Monto total de los honorarios:
              </label>
              <input
                className="monto w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
              <label htmlFor="retencion" className="text-gray-400 font-sans font-bold">
                Retención (8%) Impuesto a la Renta:
              </label>
              <input
                className="monto w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
              <label htmlFor="total_net" className="text-gray-400 font-sans font-bold">
                Total Neto Recibido:
              </label>
              <input
                className="monto w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique Información del Crédito:
            </h1>
            <form action="submit.php" method="post">
              <label htmlFor="monto_pendiente" className="text-gray-400 font-sans font-bold">
                Monto Neto Pendiente de Pago:
              </label>
              <input
                className="monto-neto w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
              <h1 className="text-base font-bold text-gray-400 mb-3">
                Agregue las cuotas asociadas al crédito:
              </h1>
              <label htmlFor="fecha_vencimiento" className="text-gray-400 font-sans font-bold">
                Fecha de Vencimiento:
              </label>
              <input
                type="date"
                id="fecha_vencimiento"
                name="fecha_vencimiento"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              />
              <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                Monto de Cuota:
              </label>
              <input
                className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
              <input
                type="submit"
                value="Agregar Cuota"
                className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                />
              <h1 className="text-gray-400 font-sans font-bold">
                Máximo podrá agregar hasta 60 Cuotas
              </h1>
              <div className="mx-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border bg-yellow-100 text-zinc-900">Modificar</th>
                        <th className="border bg-yellow-100 text-zinc-900">Eliminar</th>
                        <th className="border bg-yellow-100 text-zinc-900">Número Cuota</th>
                        <th className="border bg-yellow-100 text-zinc-900">Fecha Vencimiento</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-gray-300 text-gray-300 text-center">...</td>
                        <td className="border border-gray-300 text-gray-300 text-center">...</td>
                        <td className="border border-gray-300 text-gray-300 text-center">No se han ingresado cuotas</td>
                        <td className="border border-gray-300 text-gray-300 text-center">...</td>
                    </tr>
                    {/* Puedes agregar más filas de datos aquí */}
                    </tbody>
                </table>
                </div>
            </form>
          </div>

          <input
            type="submit"
            value="Continuar"
            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7"
          />
          <input
            type="submit"
            value="Cancelar"
            className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-bold hover:px-7"
          />
        </form>
      </section>
    </div>
  );
}

export default CreditoPage;