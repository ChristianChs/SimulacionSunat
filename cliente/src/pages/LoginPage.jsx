import React, { useEffect } from 'react';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Stars from '../components/Stars';
import LoginDNI from '../components/LoginDNI';
import LoginRUC from '../components/LoginRUC';

export default function LoginPage() {
  const { signin, signinRUC, isAuthenticated, errors: LoginErrors } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
  }, [isAuthenticated]);

  return (
    <div >
      <Stars></Stars>
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex items-center justify-center h-screen'>
          <div className='w-full text-center self-center py-5'>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {
                        LoginErrors.map((error, i) => (
                          <div className='alert alert-danger text-center w-2/5 py-2 px-3 border border-red-300 bg-red-600 rounded-md mb-2 font-sans font-semibold text-white focus:border-yellow-100' key={i}>
                            {error}
                          </div>
                        ))
                      }
              </div>
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
                      <LoginDNI signin={signin} />
                    </div>

                  </div>
                  <div className="card-back">
                    
                    <div className="center-wrap">
                      
                      <LoginRUC signinRUC={signinRUC}/>
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