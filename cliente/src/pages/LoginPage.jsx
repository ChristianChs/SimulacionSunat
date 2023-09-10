import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Starts from '../components/Stars';
import Stars from '../components/Stars';

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: LoginErrors } = useLogin();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        await signin(values);
    });

    const onSubmit2 = handleSubmit(async (values) => {
        console.log("s");
    });

    useEffect(() => {
        if (isAuthenticated) navigate("/menu");
    }, [isAuthenticated]);

    return (
        <div >
            <Stars></Stars>
            <div className='mx-auto max-w-screen-lg'>
                <div className='flex items-center justify-center h-screen'>
                    <div className='w-full text-center self-center py-5'>
                        <div className='py-5 pt-10 sm:pt-2 text-center'>
                            <h6 className="mb-0 pb-3">
                                <span className="mr-2 font-sans font-extrabold">Búsqueda por DNI</span>
                                <span className="font-sans font-extrabold">Búsqueda por RUC</span>
                            </h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className='card-front'>
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
                                                    {errors.dni && <p className="text-red-500 font-sans">DNI requerido</p>}
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
                                                        {errors.password && <p className='text-red-500 font-sans'>Contraseña requerida</p>}
                                                    </div>
                                                </div>
                                                <button type='submit' className='bg-yellow-200 hover:bg-yellow-400 text-black font-bold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center font-sans'>Ingresar</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <form onSubmit={onSubmit2}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}