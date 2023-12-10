
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
                                <td className="border bg-white text-black border-slate-300">{item.cantidad}</td>
                                <td className="border bg-white text-black border-slate-300" style={{ fontSize: '12px' }}>{item.medida}</td>
                                <td className="border bg-white text-black border-slate-300">{item.descripcion}</td>
                                <td className="border bg-white text-black border-slate-300">{item.valor}</td>
                                <td className="border bg-white text-black border-slate-300">{item.descuento}</td>
                                <td className="border bg-white text-black border-slate-300">{item.Importe_total}</td>
                                <td className="border bg-white text-black border-slate-300">{item.ICBPER}</td>
                            </tr>
                        )))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TemplateTablaVerticalpb