

const TemplateTablaVertical = ({ dato }) => {
    
    return (
        <div>
            <table className='w-full text-center border border-white'>
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
                                <td className="border border-slate-300">{item.nroCuota}</td>
                                <td className="border border-slate-300">{item.fechaCuota}</td>
                                <td className="border border-slate-300">{item.montoCuota}</td>
                            </tr>
                        )))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TemplateTablaVertical