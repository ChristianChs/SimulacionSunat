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
                INFORMACIÓN ADICIONAL
                </h1>
                <form>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-2">
                            En esta pantalla podrá consignar:
                        </h1>
                        <h1 className="text-gray-400 font-sans font-semibold">
                            - Algún comentario u observación a la factura que esta emitiendo.
                        </h1>
                        <h1 className="text-gray-400 font-sans font-semibold">
                            - Documentos relacionados a la factura.
                        </h1>
                        <h1 className="text-gray-400 font-sans font-semibold">
                            - Información relacionada a la factura.
                        </h1>
                        <h1 className="text-gray-400 font-sans font-semibold">
                            - Información que sustenta el traslado de bienes.
                        </h1>
                        <h1 className="text-gray-400 font-sans font-semibold">
                            - Placa del vehículo automotor, tratándose de venta de combustible y/o mantenimiento del mismo.
                        </h1>
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Consigne las observaciones de la factura
                        </h1>
                        <input
                            
                            name="description"
                            type="text"
                            aria-label="default input example"
                            className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                            
                        />
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Consigne los documentos relacionados de la factura
                        </h1>
                        <div className="flex justify-center">
                            <input
                                
                                type="button"
                                value="Documentos Relacionados"
                                className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                            />
                        </div>

                        <div>
                            <div className="bg-zinc-800 p-4 rounded-lg mb-4">
                                <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Ingrese los documentos relacionados a la factura electrónica:
                                </h1>
                                <h1 className="text-base font-bold text-gray-400 mb-3">
                                Tipo de Documento
                                </h1>
                                <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Tipo de Documento"
                                >
                                    <option selected="SIN"></option>
                                    <option value="GUIAR">GUÍA DE REMISIÓN REMITENTE</option>
                                    <option value="GUIAT">GUÍA DE REMISIÓN TRANSPORTISTA</option>
                                    <option value="GUIARC">GUÍA DE REMISIÓN REMITENTE (CORRELATIVO)</option>
                                    <option value="GUIATC">GUÍA DE REMISIÓN TRANSPORTISTA(CORRELATIVO)</option>
                                    <option value="GUIAE">GUÍA DE REMISIÓN POR EVENTOS</option>
                                    <option value="GRER">GRE REMITENTE - BIENES FISCALIZABLES</option>
                                    <option value="GRET">GRE TRANSPORTISTA - BIENES FISCALIZABLES</option>
                                    <option value="GRERC">GRE REMITENTE - BIENES FISCALIZABLES (CORRELATIVO)</option>
                                    <option value="GRETC">GRE TRANSPORTISTA - BIENES FISCALIZABLES (CORRELATIVO)</option>
                                    <option value="GRERCOM">GRE REMITENTE - BIENES FISCALIZABLES COMPLEMENTARIA</option>
                                    <option value="GRETCOM">GRE TRANSPORTISTA - BIENES FISCALIZABLES COMPLEMENTARIA</option>
                                    <option value="CONS">CONSTANCIA DE PAGO SPOT - IVAP</option>
                                    <option value="TICK">TICKET ENAPU</option>
                                    <option value="COD">CÓDIGO SCOP</option>
                                    <option value="OTROS">OTROS</option>
                                </select>

                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Serie Documento
                                </label>
                                    <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    />
                                
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Número Documento
                                </label>
                                <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                                
                                <div className="flex justify-end">
                                    <input
                                        
                                        type="button"
                                        value="Adicionar Item"
                                        className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                                    />
                                </div>
                            </div>

                            <div className="mx-auto bg-text-zinc-900 px-6 pt-6 pb-3 dark:text-white">
                                <table id="cuotas" className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md overflow-hidden">
                                    <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border bg-gray-500 text-gray-300 px-2">-</th>
                                        <th className="border bg-zinc-500 text-gray-300">Tipo de Documento</th>
                                        <th className="border bg-zinc-500 text-gray-300 px-5">Serie</th>
                                        <th className="border bg-zinc-500 text-gray-300">Número Inicial</th>
                                    </tr>
                                    </thead>
                                    <tbody id="cuerpo_cuotas" className="font-sans font-semibold border border-gray-400 text-gray-200 text-center">
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Consigne los datos de transaccion
                        </h1>
                        <div className="flex justify-center">
                            <input
                                
                                type="button"
                                value="Información al Crédito"
                                className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                            />
                        </div>

                        <div>
                            <div className="bg-zinc-800 p-4 rounded-lg mb-4">
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Monto Neto Pendiente de Pago
                                </label>
                                    <input
                                    
                                    name="description"
                                    type="number"
                                    aria-label="default input example"
                                    placeholder='0.00'
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />

                                <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                                    <h1 className="text-lg font-semibold text-yellow-100 mb-4">
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
                                        type="number"
                                        id="monto_cuota"
                                        placeholder="0.00"
                                        aria-label=".form-control-lg example"
                                    />

                                    <div className="flex justify-end">
                                        <input
                                            
                                            type="button"
                                            value="Agregar Cuota"
                                            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                                        />
                                    </div>
                                </div>
                                <h1 className="text-gray-400 font-sans font-bold">
                                    Máximo podrá agregar hasta 60 Cuotas
                                </h1>
                                <div className="mx-auto bg-text-zinc-900 p-6 dark:text-white">
                                    <table id="cuotas" className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md overflow-hidden">
                                        <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border bg-gray-500 text-gray-300">Eliminar</th>
                                            <th className="border bg-zinc-500 text-gray-300">Número Cuota</th>
                                            <th className="border bg-zinc-500 text-gray-300">Fecha Vencimiento</th>
                                            <th className="border bg-zinc-500 text-gray-300">Monto Cuota</th>
                                        </tr>
                                        </thead>
                                        <tbody id="cuerpo_cuotas" className="font-sans font-semibold border border-gray-400 text-gray-200 text-center">
                                        <tr>
                                            <td className="bg-zinc-600" >Total</td>
                                            <td></td>
                                            <td ></td>
                                            <td id="suma_tabla" className="bg-zinc-600">0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Consigne información relacionada a la factura
                        </h1>
                        <div className="flex justify-center">
                            <input
                                
                                type="button"
                                value="Información Relacionada"
                                className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                            />
                        </div>

                        <div>
                            <div className="bg-zinc-800 p-4 rounded-lg mb-4">
                                <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Ingrese la información adicional de la factura electrónica:
                                </h1>

                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Número de Expediente:
                                </label>
                                    <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    />
                                
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Orden de Compra:
                                </label>
                                <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                                
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Código Unidad Ejecutora:
                                </label>
                                <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                                
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Número de Proceso de Selección:
                                </label>
                                <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                                
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Número de Contrato:
                                </label>
                                <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                        <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                        Consigne los datos de la detracción
                        </h1>
                        <div className="flex justify-center">
                            <input
                                
                                type="button"
                                value="Información de la Detracción"
                                className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                            />
                        </div>

                        <div>
                            <div className="bg-zinc-800 p-4 rounded-lg mb-4">
                                <h1 className="text-base font-semibold text-yellow-100 mb-4">
                                La información de detracción siempre se registrará en moneda nacional "SOL" independiente de la moneda del comprobante.
                                </h1>
                                <h1 className="text-base font-bold text-gray-400 mb-3">
                                Tipo de Operación
                                </h1>
                                <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Tipo de Operación"
                                >
                                    <option selected="SIN"></option>
                                    <option value="GUIAR">OPERACIÓN SUJETA A DETRACCIÓN</option>
                                    <option value="GUIAT">OPERACIÓN SUJETA A DETRACCIÓN - RECURSOS HIDROBIOLÓGICOS</option>
                                    <option value="DOCI">OPERACIÓN SUJETA A DETRACCIÓN - SERVICIOS DE TRANSPORTE PASAJEROS</option>
                                    <option value="TAX">OPERACIÓN SUJETA A DETRACCIÓN - SERVICIOS DE TRANSPORTE CARGA</option>
                                </select>

                                <h1 className="text-base font-bold text-gray-400 mb-3">
                                Código de bien/servicio sujeto a detracción
                                </h1>
                                <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Código de bien"
                                >
                                    <option selected="SIN"></option>
                                    <option value="001">001-Azúcar y melaza de caña</option>
                                    <option value="002">002-Arroz</option>
                                    <option value="003">003-Alcohol etílico</option>
                                    <option value="005">005-Maíz amarillo duro</option>
                                    <option value="007">007-Caña de azúcar</option>
                                    <option value="008">008-Madera</option>
                                    <option value="009">009-Arena y piedra</option>
                                    <option value="010">010-Residuos, subproductos, desechos, recortes y desperdicios</option>
                                    <option value="011">011-Bienes gravados con el IGV, o renuncia a la exoneración</option>
                                    <option value="012">012-Intermediación laboral y tercerización</option>
                                    <option value="013">013-Animales vivos</option>
                                    <option value="014">014-Carnes y despojos comestibles</option>
                                    <option value="015">015-Abonos, cueros y pieles de origen animal</option>
                                    <option value="016">016-Aceite de pescado</option>
                                    <option value="017">017-Harina, polvo y pellets de pescado, crustáceos, moluscos y demás invertebrados acuáticos</option>
                                    <option value="019">019-Arrendamiento de bienes muebles</option>
                                    <option value="020">020-Mantenimiento y reparación de bienes muebles</option>
                                    <option value="021">021-Movimiento de carga</option>
                                    <option value="022">022-Otros servicios empresariales</option>
                                    <option value="023">023-Leche</option>
                                    <option value="024">024-Comisión mercantil</option>
                                    <option value="025">025-Fabricación de bienes por encargo</option>
                                    <option value="026">026-Servicio de transporte de personas</option>
                                    <option value="030">030-Contratos de construcción</option>
                                    <option value="031">031-Otro gravado con el IGV</option>
                                    <option value="032">032-Paprika y otros frutos de los generos capsicum o pimienta</option>
                                    <option value="034">034-Minerales metálicos no auriferos</option>
                                    <option value="035">035-Bienes exonerados del IGV</option>
                                    <option value="036">036-Oro y demás minerales metálicos exonerados del IGV</option>
                                    <option value="037">037-Demás servicios gravados con el IGV</option>
                                    <option value="039">039-Minerales no metálicos</option>
                                    <option value="040">040-Bien inmueble gravado con IGV</option>

                                </select>


                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Nro. Cta. Banco de la Nación
                                </label>
                                    <input
                                    
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                                
                                <h1 className="text-base font-bold text-gray-400 mb-3">
                                Medio de pago
                                </h1>
                                <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Medio de pago"
                                >
                                    <option selected="SIN"></option>
                                    <option value="001">001-Depósito en cuenta</option>
                                    <option value="002">002-Giro</option>
                                    <option value="003">003-Transferencia de fondos</option>
                                    <option value="004">004-Orden de pago</option>
                                    <option value="005">005-Tarjeta de débito</option>
                                    <option value="006">006-Tarjeta de crédito emitida en el país por una empresa del sistema financiero</option>
                                    <option value="007">007-Cheques con la cláusula de NO NEGOCIABLE, INTRANSFERIBLES, NO A LA ORDEN u otra equivalente. A que se refiere el inciso g) del artículo 5* de la ley </option>
                                    <option value="008">008-Efectivo, por operaciones en las que no existe obligación de utilizar medio de pago</option>
                                    <option value="009">009-Efectivo, en los demás casos</option>
                                    <option value="010">010-Medios de pago usados en comercio exterior</option>
                                    <option value="011">011-Documentos emitidos por las EDPYMES y las cooperativas de ahorro y crédito no autorizadas a captar depósitos del público</option>
                                    <option value="012">012-Tarjeta de crédito emitida en el país o en el exterior por una empresa no perteneciente al sistema financiero, cuyo objetio principal sea la emisión y administración de trajetas de crédito</option>
                                    <option value="013">013-Tarjetas de crédito emitidas en el exterior por empresas bancarias o financieras no domiciliada</option>
                                    <option value="101">101-Transferencias - Comercio exterior</option>
                                </select>
                                
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Porcentaje de detracción
                                </label>
                                <input
                                    
                                    name="description"
                                    type="number"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />

                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Monto de la detracción (S/)
                                </label>
                                <input
                                    
                                    name="description"
                                    type="number"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="h-3"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="submit"
                            value="Retroceder"
                            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7 hover:bg-ffeba7 hover:text-zinc-900 hover:border-amber-200"
                        />
                        <input
                            type="submit"
                            value="Continuar"
                            className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-bold hover:px-7 hover:bg-ffeba7 hover:text-white hover:border-gray-400"
                        />
                        <input
                            type="submit"
                            value="Cancelar"
                            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-bold hover:px-7 hover:bg-ffeba7 hover:text-zinc-900 hover:border-amber-200"
                        />
                    </div>
                </form>
            </section>
        </div>
    </div>
  );
}

export default FacturaForm;