import React from 'react'
import { useForm } from 'react-hook-form'

function RegistrarDNI({ signin }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(async (values) => {
    await signin(values)
  })

  return (
    <>
        <form onSubmit={onSubmit}>
            <div className='text-center'>
                <h4 className="mb-2 pb-3 font-sans font-bold text-2xl">DNI</h4>
                <div className="flex items-center">
                    <div className="mr-4">
                        <ion-icon name="mail-unread-outline" className="text-gray-500"></ion-icon>
                    </div>
                    <input
                        type="text"
                        className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-8 font-sans font-bold" // Añadir pl-2 aquí
                        placeholder="Numero de DNI"
                        {...register("dni", { required: true })}
                    />
                </div>
                
                <div className='mt-2 pb-4'>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <ion-icon name="lock-closed-outline" className="text-gray-500"></ion-icon>
                            
                        </div>
                        <input
                            type="password"
                            className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold" // Añadir pl-2 aquí
                            placeholder="Contraseña"
                            {...register("password", { required: true })}
                        />
                    </div>
                    
                </div>
            </div>
            <button type='submit' className='bg-yellow-200 hover:bg-yellow-400 text-black font-bold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center font-sans'>Registrar</button>
        </form>
    
    
    </>
    )
}

export default RegistrarDNI