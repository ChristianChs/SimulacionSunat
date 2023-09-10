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

    useEffect(() => {
        if (isAuthenticated) navigate("/menu")
    }, [isAuthenticated])
    return (
        <>
        {/* <Starts/> */}
        <div className='max-w-md p-10 rounded-md'>
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
        </div>
        
        {/* <div class="section">
            <div class="container">
                <div class="row full-height justify-content-center">
                    <div class="col-12 text-center align-self-center py-5">
                        <div class="section pb-5 pt-5 pt-sm-2 text-center">
                            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label for="reg-log"></label>
                            <div class="card-3d-wrap mx-auto">
                                <div class="card-3d-wrapper">
                                    <div class="card-front">
                                        <div class="center-wrap">
                                            <form action="validar2.php" method="post">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">DNI</h4>
                                                    <div class="form-dni">
                                                        <div class="form-group">
                                                            <input type="text" class="form-style" id="dnii" placeholder="Numero de DNI" name="dni" />
                                                            <i class="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className='mt-2' >
                                                            <input type="password" className="form-style" placeholder="Contraseña"
                                                             />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <button id="identificardni" class="btn mt-4">Ingresar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <form action="validar.php" method="post">
                                                <div class="section text-center">
                                                    <h4 class="mb-3 pb-3">RUC</h4>
                                                    <div class="form-group">
                                                        <input type="text" class="form-style" placeholder="Numero de RUC" id="rucc" name="ruc" />
                                                        <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="text" class="form-style" placeholder="Usuario" name="usuario" />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" class="form-style" placeholder="Contraseña" name="clave" />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button id="ingresarruc" class="btn mt-4">Ingresar</button>
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
        </div> */}
        </>
    )
}
