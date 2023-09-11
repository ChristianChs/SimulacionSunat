import React from 'react'
import { useForm } from 'react-hook-form'

function LoginRUC({ signinRUC }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(async(values) => {
    console.log(values)
    await signinRUC(values)
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='text-center'>
          <h4 className="mb-2 pb-3 font-bold text-2xl">RUC</h4>
          <div className="flex items-center">
            <div className="mr-4">
              <ion-icon name="mail-unread-outline" className="text-gray-500"></ion-icon>
            </div>
            <input
              type="text"
              placeholder="Numero de RUC"
              className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold" // Añadir pl-2 aquí
              {...register("nruc", { required: true })}
            />
          </div>
          {errors.nruc && <p className="text-red-500 font-sans">RUC requerido</p>}
          <div className='pt-2'>
            <div className="flex items-center">
              <div className="mr-4">
                <ion-icon name="person-outline" className="text-gray-500 "></ion-icon>
              </div>
              <input
                type="text"
                placeholder="Usuario"
                className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold" // Añadir pl-2 aquí
                {...register("user", { required: true })}
              />
            </div>
            {errors.user && <p className="text-red-500 font-sans">Usuario requerido</p>}
          </div>
          <div className='pt-2 pb-4'>
            <div className="flex items-center">
              <div className="mr-4">
                <ion-icon name="lock-closed-outline" className="text-gray-500"></ion-icon>
              </div>
              <input
                type="password"
                placeholder="Contraseña"
                className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold" // Añadir pl-2 aquí
                {...register("password2", { required: true })}
              />
            </div>
            {errors.password2 && <p className="text-red-500 font-sans">Contraseña requerida</p>}
          </div>
        </div>
        <button className='bg-yellow-200 hover:bg-yellow-400 text-black font-bold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center font-sans' type='submit font-sans'>Ingresar</button>
      </form>
    </>
  )
}

export default LoginRUC