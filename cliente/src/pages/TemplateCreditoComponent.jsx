const FormatoTabla = ({ dato }) => {
    const { nroCuota, fechaCuota, montoCuota } = dato
    return (
        <div>
            <table className=' m-4 w-48 border border-collapse border-white'>
                <thead>
                    <tr>
                        <th colSpan={3} className='border border-slate-300'>
                            Resumen
                        </th>
                    </tr>
                    <tr>
                        <th className="border border-slate-300">Nro Cuota</th>
                        <th className="border border-slate-300">Fecha</th>
                        <th className="border border-slate-300">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-300">{nroCuota}</td>
                        <td className="border border-slate-300">{fechaCuota}</td>
                        <td className="border border-slate-300">{montoCuota}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormatoTabla