

const TemplateTablaVertical = ({ dato }) => {

    return (
        <div>
            <table className='w-full text-center bg-black text-white border border-white'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dato.map((item => (
                            <tr>
                                <td className="border bg-white text-black border-slate-300">{item.numero_cuota}</td>
                                <td className="border bg-white text-black border-slate-300">{item.fecha_vencimiento}</td>
                                <td className="border bg-white text-black border-slate-300">{item.monto_cuota}</td>
                            </tr>
                        )))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TemplateTablaVertical