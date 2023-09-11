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
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto ">
                                <div className="card-3d-wrapper ">
                                    <div className='card-front '>
                                        
                                            
                                        <RegistrarDNI signin={signin} />

                                        
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