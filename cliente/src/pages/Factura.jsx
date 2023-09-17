import React from 'react';
import Starts from '../components/Stars'

function FacturaForm() {
  // Puedes agregar aquí el estado y funciones necesarias para manejar los datos del formulario

  return (
    <div>
        <Starts className="stars-behind" />
        <div className="bg-primary min-h-screen flex items-center justify-center relative pt-1">
        <section
            id="div_fundamental"
            className="bg-zinc-800 rounded-lg shadow-md p-3 w-full max-w-screen-lg relative"
        >
            <div className="min-h-screen flex items-center justify-center">
            <div className="bg-primary p-8 w-full max-w-screen-lg">
                <h1 className="text-2xl font-bold text-center text-yellow-100 mb-6 ">
                Emisión de la Factura
                </h1>
                
                <div className="bg-zinc-900 p-4 rounded-lg mb-4">

                    <div className="mx-auto bg-text-zinc-900 p-6 dark:text-white">
                    <table
                        id="cuotas"
                        className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md overflow-hidden"
                    >
                        <tbody className="font-sans font-semibold border border-gray-400 text-gray-200 text-center">
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique el Tipo de Transacción</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100 w-2/5">
                            <label className="ml-4">
                                <input
                                type="radio"
                                name="fila2_radio"
                                value="al_contado"
                                className="mr-1"
                                />
                                Al contado
                            </label>
                            <label className="ml-4">
                                <input
                                type="radio"
                                name="fila2_radio"
                                value="al_credito"
                                className="mr-1"
                                />
                                Al crédito
                            </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si es una factura de Exportación</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                            <label className="ml-4">
                                <input
                                type="radio"
                                name="fila5_radio"
                                value="si"
                                className="mr-1"
                                />
                                Sí
                            </label>
                            <label className="ml-4">
                                <input
                                type="radio"
                                name="fila5_radio"
                                value="no"
                                className="mr-1"
                                />
                                No
                            </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Consigne el RUC del Contribuyente Receptor de la Factura</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                            <input
                                type="text"
                                name="fila3_text"
                                className="w-full py-2 px-3 border border-gray-300 rounded-md bg-gray-900 font-sans font-bold text-gray-300 focus:border-yellow-100"
                            />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7"></td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                            <input
                                type="text"
                                name="fila4_text"
                                className="w-full py-2 px-3 border border-gray-300 rounded-md bg-gray-900 font-sans font-bold text-gray-300 focus:border-yellow-100"
                                readOnly
                            />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la factura se emite por un Pago Anticipado</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la Factura la emite un Emisor Itinerante</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique el Establecimiento del Emisor es donde entregue el bien o prese el servicio</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Consigne la dirección donde entregue el bien o preste el servicio</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la Factura se emite por venta de combustible y/o mantenimiento de un vehículo</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique el Tipo de Moneda de la Factura</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <select
                                    className="w-full py-2 px-3 border border-gray-300 rounded-md form-select bg-gray-900 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                >
                                    <option value="SOLES">SOLES</option>
                                    <option value="EURO">EURO</option>
                                    <option value="DOLAR AMERICANO">DOLAR AMERICANO</option>
                                    <option value="DOLAR CANADIENSE">DOLAR CANADIENSE</option>
                                    <option value="LIBRA ESTERLINA">LIBRA ESTERLINA</option>
                                    <option value="YEN">YEN</option>
                                    <option value="CORONA SUECA">CORONA SUECA</option>
                                    <option value="FRANCO SUIZO">FRANCO SUIZO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la Factura tiene Descuentos o Deduce Anticipos</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la Factura tiene ISC</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la Factura tiene Operaciones Gratuitas</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black bg-yellow-100 text-black text-left pl-7 pr-7">Indique si la Factura tiene Cargos y Otros Tributos que no forman parte de la base imponible del IGV</td>
                            <td className="border border-gray-300 py-2 px-4 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100">
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="si"
                                    className="mr-1"
                                    />
                                    Sí
                                </label>
                                <label className="ml-4">
                                    <input
                                    type="radio"
                                    name="fila5_radio"
                                    value="no"
                                    className="mr-1"
                                    />
                                    No
                                </label>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                <button
                    className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-zinc-900 hover:border-amber-200"
                    onClick={() => {
                    // Manejar la acción de "Continuar" aquí
                    }}
                >
                    Continuar
                </button>
                <button
                    className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-white hover:border-gray-400"
                    onClick={() => {
                    // Manejar la acción de "Cancelar" aquí
                    }}
                >
                    Cancelar
                </button>
                </div>
            </div>
            </div>
        </section>
        </div>
    </div>
  );
}

export default FacturaForm;