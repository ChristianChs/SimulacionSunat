
const TemplateTablaVerticalpb = ({ dato }) => {
    
    return (
        <div>
            <table className='w-full text-center bg-black text-white border border-white'>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Unidad Medida</th>
                        <th>Descripcion</th>
                        <th>Valor Unitario</th>
                        <th>Descuento</th>
                        <th>Importe de Venta</th>
                        <th>ICBPER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dato.map((item => (
                            <tr>
                                <td className="border bg-white text-black border-slate-300" style={{ fontSize: '5px' }}>{item.cantidad_producto}</td>
                                <td className="border bg-white text-black border-slate-300" style={{ fontSize: '12px' }}>{item.unidad_medida}</td>
                                <td className="border bg-white text-black border-slate-300">{item.descripcion}</td>
                                <td className="border bg-white text-black border-slate-300">{item.valor_unitario}</td>
                                <td className="border bg-white text-black border-slate-300">{item.descuento}</td>
                                <td className="border bg-white text-black border-slate-300">{item.importe_venta}</td>
                                <td className="border bg-white text-black border-slate-300">{item.icbper}</td>
                            </tr>
                        )))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TemplateTablaVerticalpb