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
                Emisión de Factura Electronica
                </h1>
                <form>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                        Indique el Tipo de Transacción
                        </h1>
                        <input
                            type="radio"
                            id="retention_yes"
                            name="tipo"
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
                            name="tipo"
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
                            name="detraccion"
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
                            name="detraccion"
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
                            name="exportacion"
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
                            name="exportacion"
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
                            name="anticipado"
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
                            name="anticipado"
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
                            name="itinerante"
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
                            name="itinerante"
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
                            name="establecimiento"
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
                            name="establecimiento"
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
                            name="direccion"
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
                            name="direccion"
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
                            name="combustible"
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
                            name="combustible"
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
                            name="descuentos"
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
                            name="descuentos"
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
                            name="isc"
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
                            name="isc"
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
                            name="operacionesg"
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
                            name="operacionesg"
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
                            name="cargos"
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
                            name="cargos"
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
                        Pre - Elaboración de la Factura Electrónica
                        </h1>
                        <label htmlFor="num_doc" className="text-gray-400 font-sans font-bold">
                            Número de documento:
                        </label>
                        <input
                            disabled
                            id="pendiente"
                            className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            type="text"
                            aria-label=".form-control-lg example"
                        />

                        <label htmlFor="razon_s" className="text-gray-400 font-sans font-bold">
                            Razón Social:
                        </label>
                        <input
                            disabled
                            id="pendiente"
                            className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            type="text"
                            aria-label=".form-control-lg example"
                        />

                        <label htmlFor="direccion_c" className="text-gray-400 font-sans font-bold">
                            Dirección del Cliente:
                        </label>
                        <input
                            disabled
                            id="pendiente"
                            className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            type="text"
                            aria-label=".form-control-lg example"
                        />

                        <label htmlFor="tipo_m" className="text-gray-400 font-sans font-bold">
                            Tipo de Moneda
                        </label>
                        <input
                            disabled
                            id="pendiente"
                            className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            type="text"
                            aria-label=".form-control-lg example"
                        />

                        <label htmlFor="date_issue" className="text-gray-400 font-sans font-semibold">
                            Fecha de Emisión:
                        </label>
                        <input
                            type="date"
                            id="date_issue"
                            name="date_issue"
                            className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                        />

                        <div className="h-4"></div>
                        <div className="bg-zinc-800 p-4 rounded-lg mb-4">
                            
                            <h1 className="text-base font-bold mb-3 text-white">
                                Agregue los bienes o servicios:
                            </h1>
                            <div className="flex justify-center">
                                <div className="mx-7">
                                    <input
                                        type="radio"
                                        id="retention_yes"
                                        name="item"
                                        value="1"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                        Bien
                                    </label>
                                    <br />
                                </div>

                                <div className="h-1"></div>
                                <div className="mx-7">
                                    <input
                                        type="radio"
                                        id="retention_no"
                                        name="item"
                                        value="0"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                        Servicio
                                    </label>
                                    <br />
                                </div>
                            </div>

                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Cantidad:
                            </label>
                            <input
                                className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="number"
                                id="monto_cuota"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Unidad de Medida:
                            </label>
                            <input
                                className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                id="monto_cuota"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Código:
                            </label>
                            <input
                                className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                id="monto_cuota"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Descripción:
                            </label>
                            <textarea className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                id="monto_cuota"
                                aria-label=".form-control-lg example">
                            </textarea>

                            <h1 className="mb-3 text-gray-400 font-sans font-bold">
                            Impuesto Bolsas Plásticas:
                            </h1>
                            <div className="flex justify-center">
                                <div className="mx-7">
                                    <input
                                        type="radio"
                                        id="retention_yes"
                                        name="impuestobolsas"
                                        value="1"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                        SI
                                    </label>
                                    <br />
                                </div>
                                
                                <div className="mx-7">
                                    <div className="h-1"></div>
                                    <input
                                        type="radio"
                                        id="retention_no"
                                        name="impuestobolsas"
                                        value="0"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                        NO
                                    </label>
                                    <br />
                                </div>
                            </div>
                            
                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Valor Unitario:
                            </label>
                            <input
                                className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="number"
                                id="monto_cuota"
                                placeholder="0.00"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Descuento:
                            </label>
                            <input
                                disabled
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="number"
                                id="monto_cuota"
                                placeholder="0.00"
                                aria-label=".form-control-lg example"
                            />

                            <h1 className="text-gray-400 font-sans font-bold">
                            ISC:
                            </h1>
                            <select
                            className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            aria-label="ISC"
                            >
                                <option selected="NADA"></option>
                                <option selected="NADA">NO SE VE EN EL VIDEO</option>
                            </select>
                            <div className='flex'>
                                <input
                                    className="monto-cuota w-1/6 py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="monto_cuota"
                                    placeholder="0"
                                    aria-label=".form-control-lg example"
                                />
                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold text-lg ml-2 mr-6 mt-2">
                                    %
                                </label>

                                <input
                                    disabled
                                    className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="monto_cuota"
                                    placeholder="0.00"
                                    aria-label=".form-control-lg example"
                                />
                            </div>

                            <h1 className="mb-3 text-gray-400 font-sans font-bold">
                            IGV:
                            </h1>
                            <div className="flex justify-center">
                                <div className="mx-7">
                                    <input
                                        type="radio"
                                        id="retention_yes"
                                        name="igvporcentaje"
                                        value="1"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                        18 %
                                    </label>
                                    <br />
                                </div>
                                
                                <div className="mx-7">
                                    <div className="h-1"></div>
                                    <input
                                        type="radio"
                                        id="retention_no"
                                        name="igvporcentaje"
                                        value="0"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                        10 %
                                    </label>
                                    <br />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="mx-7">
                                    <input
                                        type="radio"
                                        id="retention_yes"
                                        name="igvtipo"
                                        value="1"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                        Gravado
                                    </label>
                                    <br />
                                </div>
                                
                                <div className="mx-7">
                                    <div className="h-1"></div>
                                    <input
                                        type="radio"
                                        id="retention_no"
                                        name="igvtipo"
                                        value="0"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                        Exonerado
                                    </label>
                                    <br />
                                </div>

                                <div className="mx-7">
                                    <input
                                        type="radio"
                                        id="retention_yes"
                                        name="igvtipo"
                                        value="1"
                                        className="mr-2"
                                    />
                                    <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                        Inafecto
                                    </label>
                                    <br />
                                </div>
                            </div>
                            <input
                                disabled
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="number"
                                id="monto_cuota"
                                placeholder="0.00"
                                aria-label=".form-control-lg example"
                            />

                            <h1 className="text-gray-400 font-sans font-bold">
                            ICBPER:
                            </h1>
                            <div className='flex'>
                                <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 mr-3 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="ISC"
                                >
                                    <option selected="NADA"> </option>
                                    <option selected="NADA">NO SE VE EN EL VIDEO</option>
                                </select>

                                <input
                                    disabled
                                    className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 ml-3 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="text"
                                    id="monto_cuota"
                                    placeholder="0.00"
                                    aria-label=".form-control-lg example"
                                />
                            </div>
                            
                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Impuesto ICBPER:
                            </label>
                            <input
                                disabled
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="number"
                                id="monto_cuota"
                                placeholder="0.00"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                Importe Total del Item:
                            </label>
                            <input
                                disabled
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="number"
                                id="monto_cuota"
                                placeholder="0.00"
                                aria-label=".form-control-lg example"
                            />





                            <div className="h-1"></div>
                            <div className="flex justify-end">
                                <input
                                    id="agregar"
                                    type="button"
                                    value="Adicionar Item"
                                    className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                                />
                            </div>
                        </div>
                        <div className="mx-auto bg-text-zinc-900 p-6 dark:text-white">
                            <table id="cuotas" className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border bg-gray-500 text-gray-300">Eliminar</th>
                                        <th className="border bg-zinc-500 text-gray-300">Bien/Servicio</th>
                                        <th className="border bg-zinc-500 text-gray-300">Gravado/Exonerado/Inafecto</th>
                                        <th className="border bg-zinc-500 text-gray-300">Unidad Medida</th>
                                        <th className="border bg-zinc-500 text-gray-300">Cantidad</th>
                                        <th className="border bg-zinc-500 text-gray-300">Código</th>
                                        <th className="border bg-zinc-500 text-gray-300">Descripción</th>
                                    </tr>
                                </thead>
                                <tbody id="cuerpo_cuotas" className="font-sans font-semibold border border-gray-400 text-gray-200 text-center">
                                    <tr>
                                        <td className="bg-zinc-600" >Total</td>
                                        <td></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td ></td>
                                        <td id="suma_tabla" className="bg-zinc-600">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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