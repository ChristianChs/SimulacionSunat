
const TemplateTablaVerticalp = ({ dato }) => {
    
    return (
        <div>
            <table className='w-full text-center bg-black text-white border border-white'>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Unidad Medida</th>
                        <th>Descripcion</th>
                        <th>Valor Unitario</th>
                        <th>ICBPER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dato.map((item => (
                            <tr>
                                <td className="border bg-white text-black border-slate-300">{item.cantidad}</td>
                                <td className="border bg-white text-black border-slate-300">{item.medida}</td>
                                <td className="border bg-white text-black border-slate-300">{item.descripcion}</td>
                                <td className="border bg-white text-black border-slate-300">{item.valor}</td>
                                <td className="border bg-white text-black border-slate-300">{item.ICBPER}</td>
                            </tr>
                        )))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TemplateTablaVerticalp