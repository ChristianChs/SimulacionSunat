const FormatoTabla = ({ dato }) => {
    const { nroCuota, fechaCuota, montoCuota } = dato
    return (
        <div>
            <table className='w-full text-center border border-white'>
                <thead>
                    <tr>
                        
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