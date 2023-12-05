import React, { useState } from 'react'
import FormatoTabla from './TemplateCreditoComponent'

const TemplateCredito = () => {

    const [data, setData] = useState([
        { nroCuota: "1", fechaCuota: "15/25/2023", montoCuota: "5000" },
        { nroCuota: "2", fechaCuota: "16/25/2023", montoCuota: "8000" },
        { nroCuota: "3", fechaCuota: "17/25/2023", montoCuota: "1000" },
        { nroCuota: "3", fechaCuota: "17/25/2023", montoCuota: "1000" },
        { nroCuota: "3", fechaCuota: "17/25/2023", montoCuota: "1000" },
        { nroCuota: "3", fechaCuota: "17/25/2023", montoCuota: "1000" },
        { nroCuota: "3", fechaCuota: "17/25/2023", montoCuota: "1000" },
    ])
    return (
        <div className='container m-6 bg-cyan-500'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(item => (
                        <FormatoTabla dato={item} />
                    ))
                }

            </div>
        </div>

    )
}

export default TemplateCredito