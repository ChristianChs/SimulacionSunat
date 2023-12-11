import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Stars from '../components/Stars';

function RegistrarPage() {

  const { registrar, errors: LoginErrors } = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    const rucPattern = /^\d{11}$/;
    const dniPattern = /^\d{8}$/;
    const dni = document.getElementById('dni_regis').value;
    const ruc = document.getElementById('ruc_regis').value;

    const showAlertDanger = (msg) => {
      setIsAlertVisible(true);
      setErrorMessage(msg);
    };

    if (!dniPattern.test(dni)) {
      showAlertDanger('El DNI debe tener exactamente 8 números.');
      return;
    }
    if (!rucPattern.test(ruc)) {
      showAlertDanger('El RUC debe tener exactamente 11 números.');
      return;
    }

    try {
      const datosDNI = await verificarDNI(dni);

      if (datosDNI.success === true) {
        console.log('DNI válido, redirigiendo...');
        console.log('bien hecho');

        try {
          const datosRUC = await verificarRUC(ruc);

          if (datosRUC.estado === 'ACTIVO') {
            console.log('RUC válido, redirigiendo...');
            console.log('bien hecho');

            const data = await registrar(values);

            if (data.status === 200) {
              navigate('/login');
            }
          } else {
            showAlertDanger('El RUC proporcionado no es válido.');
          }
        } catch (error) {
          showAlertDanger('Error al conectar con la API o el servidor.');
        }
      } else {
        showAlertDanger('El DNI proporcionado no es válido.');
      }
    } catch (error) {
      showAlertDanger('Error al conectar con la API o el servidor.');
    }
  });


  const verificarDNI = async (dni) => {
    const apiUrl = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1peWFoMTk1NTBAbWNlbmIuY29tIn0.c94Mnv3goaTBnM3WvfYO-5fO3Es4NKjL-CwHTDZMtq0`;
    const response = await fetch(apiUrl);
    return await response.json();
  };

  const verificarRUC = async (ruc) => {
    const apiUrl = `https://dniruc.apisperu.com/api/v1/ruc/${ruc}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1peWFoMTk1NTBAbWNlbmIuY29tIn0.c94Mnv3goaTBnM3WvfYO-5fO3Es4NKjL-CwHTDZMtq0`;
    const response = await fetch(apiUrl);
    return await response.json();
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <body className="bg-gradient-to-b from-neutral-800 via-neutral-950 to-transparent overflow-hidden h-screen">
      <Stars></Stars>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full text-center self-center py-5">
            <div className="py-5 pt-10 sm:pt-2 text-center">
              <label htmlFor="reg-log"></label>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {isAlertVisible && (
                  <div className="alert alert-danger text-center w-2/5 py-2 px-3 border border-red-300 bg-red-600 rounded-md mb-2 font-sans font-semibold text-white focus:border-yellow-100">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="card-3d-wrap mx-auto " id="cambio">
                <div className="card-3d-wrapper ">
                  <div className="card-front ">
                    <form onSubmit={onSubmit}>
                      <div id="fondo_gris" className="center-wrap ">
                        <h4 className="mb-2 pb-3 font-sans font-bold text-2xl">REGISTRAR</h4>
                        <div className="flex items-center">
                          <div className="mr-4">
                            <ion-icon name="mail-unread-outline" className="text-gray-500"></ion-icon>
                          </div>
                          <input
                            id="dni_regis"
                            type="text"
                            className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-8 font-sans font-bold"
                            placeholder="Numero de DNI"
                            {...register("dni", { required: true })}
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="mr-4">
                            <ion-icon name="mail-unread-outline" className="text-gray-500"></ion-icon>
                          </div>
                          <input
                            id="ruc_regis"
                            type="text"
                            placeholder="Numero de RUC"
                            className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold"
                            {...register("nruc", { required: true })}
                          />
                        </div>
                        <div className='pt-2'>
                          <div className="flex items-center">
                            <div className="mr-4">
                              <ion-icon name="person-outline" className="text-gray-500 "></ion-icon>
                            </div>
                            <input
                              id="usuario_regis"
                              type="text"
                              placeholder="Usuario"
                              className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold"
                              {...register("user", { required: true })}
                            />
                          </div>
                        </div>
                        <div className='mt-2 pb-4'>
                          <div className="flex items-center">
                            <div className="mr-4">
                              <ion-icon name="lock-closed-outline" className="text-gray-500"></ion-icon>
                            </div>
                            <input
                              id="clave_regis"
                              type="password"
                              className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold"
                              placeholder="Contraseña"
                              {...register("password2", { required: true })}
                            />
                          </div>
                        </div>
                        <button id="regis_boton" type='submit' className='bg-yellow-200 hover:bg-yellow-400 text-black font-bold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center font-sans'>Registrar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default RegistrarPage;
