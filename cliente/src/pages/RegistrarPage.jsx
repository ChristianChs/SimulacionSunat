import React from 'react';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import RegistrarDNI from '../components/RegistrarDNI';
import RegistrarRUC from '../components/RegistrarRUC';


import Stars from '../components/Stars';



function RegistrarPage() {
    const { signin, signinRUC, isAuthenticated, errors: LoginErrors } = useLogin();
    const navigate = useNavigate();
    return(
    <body class="bg-gradient-to-b from-neutral-800 via-neutral-950 to-transparent overflow-hidden h-screen">
         <Stars></Stars>
            <div className='mx-auto max-w-screen-lg'></div>
            <div className='flex items-center justify-center h-screen'>
                    <div className='w-full text-center self-center py-5'>
                        <div className='py-5 pt-10 sm:pt-2 text-center'>
                            <h6 className="mb-0 pb-3">
                                <span className="mr-2 font-sans font-extrabold">Registrar por DNI</span>
                                <span className="font-sans font-extrabold">Registrar por RUC</span>
                            </h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className='card-front'>
                                        <div className="center-wrap">
                                            
                                            <RegistrarDNI signin={signin} />

                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            
                                            <RegistrarRUC signinRUC={signinRUC}/>                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </body>
    )
}

export default RegistrarPage;