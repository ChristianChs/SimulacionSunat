import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLogin } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'
import Starts from '../components/Stars'
export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, isAuthenticated, errors: LoginErrors } = useLogin()
    const navigate = useNavigate()
    const onSubmit = handleSubmit(async (values) => {
        await signin(values)
    })

    const onSubmit2 = handleSubmit(async (values) => {
        console.log("s")
    })

    useEffect(() => {
        if (isAuthenticated) navigate("/menu")
    }, [isAuthenticated])
    return (
        <>
            {/* <Starts/> */}
            {/* <div className='max-w-md p-10 rounded-md'>
            {
                LoginErrors.map((error, i) => (
                    <div className='bg-red-400 text-white' key={i}> 
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
                <input type="text" {...register("dni", { required: true })}
                    className='w-full text-white px-4 py-2 rounded-md my-2' />
                {
                    errors.dni && (
                        <p className='text-red-500'>DNI requerido</p>
                    )
                }
                <input type="text" {...register("password", { required: true })}
                    className='w-full text-white px-4 py-2 rounded-md my-2' />
                {
                    errors.password && (
                        <p className='text-red-500'>Contraseña requerida</p>
                    )
                }
                <button type='submit' >Login</button>
            </form>
        </div> */}

            <div className='p-8'>
                <div className='mx-auto max-w-screen-lg'>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='w-full text-center self-center py-5'>
                            <div className='py-5 pt-10 sm:pt-2 text-center'>
                                <h6 className="mb-0 pb-3">
                                    <span className="mr-2">LOGIN DNI</span>
                                    <span>LOGIN RUC</span>
                                </h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">

                                        <div className="center-wrap">
                                            {
                                                LoginErrors.map((error, i) => (
                                                    <div className='bg-red-400 text-white' key={i}>
                                                        {error}
                                                    </div>
                                                ))
                                            }
                                            <form onSubmit={onSubmit}>
                                                <div className='text-center'>
                                                    <h4 className="mb-2 pb-3">DNI</h4>
                                                    <div >
                                                        <div >
                                                            <ion-icon name="mail-unread-outline"></ion-icon>
                                                            <input type="text" className="form-style" placeholder="Numero de DNI"
                                                                {...register("dni", { required: true })}
                                                            />
                                                            {
                                                                errors.dni && (
                                                                    <p className='text-red-500'>DNI requerido</p>
                                                                )
                                                            }

                                                        </div>
                                                        <div className='mt-2 pb-4' >

                                                            <ion-icon name="lock-closed-outline" ></ion-icon>
                                                            <input type="password" className="form-style" placeholder="Contraseña"
                                                                {...register("password", { required: true })}
                                                            />
                                                            {
                                                                errors.password && (
                                                                    <p className='text-red-500'>Contraseña requerida</p>
                                                                )
                                                            }
                                                        </div>
                                                        <button className='bg-yellow-200 hover:bg-yellow-400 text-black font-semibold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center' type='submit'>Ingresar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="card-back">
                                            <div className="center-wrap">
                                                {
                                                    LoginErrors.map((error, i) => (
                                                        <div className='bg-red-400 text-white' key={i}>
                                                            {error}
                                                        </div>
                                                    ))
                                                }
                                                <form onSubmit={onSubmit2}>
                                                    <div className='text-center'>
                                                        <h4 className="mb-2 pb-3">RUC</h4>
                                                        <div>
                                                            <ion-icon name="mail-unread-outline"></ion-icon>
                                                            <input type="text" placeholder="Numero de RUC"
                                                                className="form-style"
                                                                {...register("nruc", { required: true })}
                                                            />
                                                            {
                                                                errors.dni && (
                                                                    <p className='text-red-500'>DNI requerido</p>
                                                                )
                                                            }

                                                        </div>
                                                        <div className='pt-2' >
                                                            <ion-icon name="person-outline"></ion-icon>
                                                            <input type="text" placeholder="Usuario"
                                                                className="form-style"
                                                                {...register("user", { required: true })}
                                                            />
                                                        </div>
                                                        <div className='pt-2 pb-4'>
                                                            <ion-icon name="lock-closed-outline" ></ion-icon>
                                                            <input type="password" placeholder="Contraseña"
                                                                className="form-style"
                                                                {...register("password", { required: true })}
                                                            />

                                                        </div>
                                                        <button className='bg-yellow-200 hover:bg-yellow-400 text-black font-semibold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center' type='submit'>Ingresar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
