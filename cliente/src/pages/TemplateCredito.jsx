import React, { useState } from 'react'
import FormatoTabla from './TemplateCreditoComponent'

const TemplateCredito = () => {

    
    return (
        <div className='container m-6 bg-cyan-500'>
            <div className='grid-0.2 grid-cols-1 gap-2'>
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