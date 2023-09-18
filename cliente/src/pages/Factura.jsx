import React, { useEffect, useState } from 'react'
import Starts from '../components/Stars'

function FacturaForm() {
  // Puedes agregar aquí el estado y funciones necesarias para manejar los datos del formulario

  return (
    <div>
        <Starts className="stars-behind" />
        <div className="bg-primary min-h-screen flex items-center justify-center relative">
        
            <section id="div_fundamental" className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md relative">
            
                <h1 className="text-2xl font-bold text-center text-yellow-100 mb-6">
                Emisión del Recibo por Honorarios Electrónico
                </h1>
                <form>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique el Tipo de Transacción
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            Al contado
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            Al crédito
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si existen operaciones sujetas a Detracción
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    /*AQUI SE DEBE USAR JAVA, EN CASO EL USUARIO APRIETE SI en "DETRACCIÓN", NO MOSTRAR EL CUADRO SIGUIENTE Y PARA LOS DEMÁS CUADROS, TOMARLO COMO SI "INDIQUE SI ES UNA FACTURA DE EXPORTACIÓN" HUBIERAN MARCADO QUE NO*/

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si es una Factura de Exportación
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    /*AQUI SE DEBE USAR JAVA, EN CASO EL USUARIO APRIETE NO en "INDIQUE SI ES UNA FACTURA DE EXPORTACIÓN", MOSTRAR ESTE CUADRO SIGUIENTE*/

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Consigne el RUC del Contribuyente Receptor de la Factura
                        </h1>
                        <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                            RUC:
                        </label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            aria-label="default input example"
                            className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            
                        />
                        <label htmlFor="observation" className="text-gray-400 font-sans font-semibold">
                            Razon Social:
                        </label>
                        <input
                            id="impuesto"
                            className="monto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            type="text"
                            aria-label=".form-control-lg example"
                            disabled
                        />
                    </div>
                    
                    
                    /*AQUI SE DEBE USAR JAVA, EN CASO EL USUARIO APRIETE SI en "INDIQUE SI ES UNA FACTURA DE EXPORTACIÓN", MOSTRAR ESTE CUADRO SIGUIENTE*/
                    
                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Seleccione el Tipo de documento de la Factura de Venta
                        </h1>
                        <h1 className="text-base font-bold text-gray-400 mb-3">
                        Tipo de Documento
                        </h1>
                        <select
                        className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                        aria-label="Tipo de Moneda"
                        >
                            <option selected="SIN">SIN DOCUMENTO</option>
                            <option value="REG">REG. ÚNICO DE CONTRIBUYENTES</option>
                            <option value="DOCT">DOC. TRIB. NO DOM. SIN RUC</option>
                            <option value="DOCI">DOC. IDENTIF PERS NAT NO DOM.</option>
                            <option value="TAX">TAX IDENTIFICATION NUMBER - TIN _ DOC TRIB PP.NN</option>
                            <option value="IDEN">IDENTIFICATION NUMBER - IN _ DOC TRIB PP.JJ</option>
                        </select>
                        <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                            Consigne el Nombre o Razon Social del Receptor de la Factura:
                        </label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            aria-label="default input example"
                            className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            
                        />
                    </div>


                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura se emite por un Pago Anticipado
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura la emiite un Emisor Itinerante
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique el Establecimiento del Emisor es donde entregue el bien o prese el servicio
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Consigne la dirección donde entregue el bien o preste el servicio
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura se emite por venta de combustible y/o mantenimiento de un vehículo
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Indique el Tipo de Moneda de la Factura
                        </h1>
                        <h1 className="text-base font-bold text-gray-400 mb-3">
                        Tipo de Moneda
                        </h1>
                        <select
                        className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                        aria-label="Tipo de Moneda"
                        >
                            <option selected="SOLES">SOLES</option>
                            <option value="EURO">EURO</option>
                            <option value="DOLAR AMERICANO">DOLAR AMERICANO</option>
                            <option value="DOLAR CANADIENSE">DOLAR CANADIENSE</option>
                            <option value="LIBRA ESTERLINA">LIBRA ESTERLINA</option>
                            <option value="YEN">YEN</option>
                            <option value="CORONA SUECA">CORONA SUECA</option>
                            <option value="FRANCO SUIZO">FRANCO SUIZO</option>

                        </select>
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura tiene Descuentos o Deduce Anticipos
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>
                    
                    /*AQUI SE DEBE USAR JAVA, EN CASO EL USUARIO APRIETE SI EN "INDIQUE SI ES UNA FACTURA DE EXPORTACIÓN", NO SE DEBE MOSTRAR ESTE CUADRO SIGUIENTE*/

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura tiene ISC
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura tiene Operaciones Gratuitas
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique si la Factura tiene Cargos y Otros Tributos que no forman parte de la base imponible del IGV
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="retention"
                            value="1"
                            className="mr-2"
                        />
                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                            SI
                        </label>
                        <br />
                        <div className="h-1"></div>
                        <input
                            type="radio"
                            id="retention_no"
                            name="retention"
                            value="0"
                            className="mr-2"
                        />
                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                            NO
                        </label>
                        <br />
                    </div>

                    <div className="h-3"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="submit"
                            value="Continuar"
                            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-zinc-900 hover:border-amber-200"
                        />
                        <input
                            type="submit"
                            value="Cancelar"
                            className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-white hover:border-gray-400"
                        />
                    </div>
                </form>
            </section>
        </div>
    </div>
  );
}

export default FacturaForm;