import React from 'react'
import { useForm } from 'react-hook-form'

function RegistrarDNI({ signin }) {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        await signin(values)
    })

    const verificarDNI = async (dni) => {
        const apiUrl = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNlYmFzdGlhbmxpbmFyZXMyNDA5QGdtYWlsLmNvbSJ9.-pBXpe7CsILms3WRi5GRieQY2THliDn1gwIweC2Fkco`;
        const response = await fetch(apiUrl);
        return await response.json();
    }

    const verificarRUC = async (ruc) => {
        const apiUrl = `https://dniruc.apisperu.com/api/v1/ruc/${ruc}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNlYmFzdGlhbmxpbmFyZXMyNDA5QGdtYWlsLmNvbSJ9.-pBXpe7CsILms3WRi5GRieQY2THliDn1gwIweC2Fkco`;
        const response = await fetch(apiUrl);
        return await response.json();
    }

    const dniInput = document.getElementById('dni_regis');
    const rucInput = document.getElementById('ruc_regis'); 

    const identificarse = () => {
        const rucPattern = /^\d{11}$/;
        const dniPattern = /^\d{8}$/;
        const dni = dniInput.value;
        const ruc=rucInput.value;
        if (!dniPattern.test(dni)) {
            showAlertDanger('alert-container', 'El DNI debe tener exactamente 8 números.');
            return;
        }
        if (!rucPattern.test(ruc)) {
            showAlertDanger('alert-container', 'El RUC debe tener exactamente 11 números.');
            return;
        }

    
        verificarDNI(dni)
            .then((datosDNI) => {
                if (datosDNI.success === true) {
                    console.log('DNI válido, redirigiendo...');
                    console.log("bien hecho"); 
                } else {
                    showAlertDanger('alert-container', 'El RUC proporcionado no es válido.');
                }
            })
            .catch((error) => {
                showAlertDanger('alert-container', 'Error al conectar con la API o el servidor.');
            })
        verificarRUC(ruc)
            .then((datosRUC)=>{
                if(datosRUC.estado==="ACTIVO"){
                    console.log('RUC válido, redirigiendo...');
                    console.log("bien hecho");
                }
                else{
                    showAlertDanger('alert-container', 'El RUC proporcionado no es válido.');
                }
            })
            .catch((error) => {
                showAlertDanger('alert-container', 'Error al conectar con la API o el servidor.');
            })    

    };

const showAlertDanger = (id, msg) => {
    setIsAlertVisible(true);
	let alert = document.querySelector(`#${id} .alert-danger`);
	alert.classList.remove('d-none');
	alert.innerHTML = msg;
} 

  return (
    <>
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
                                className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold" // Añadir pl-2 aquí
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
                                className="form-style w-full text-white px-4 py-2 rounded-md my-2 pl-2 font-sans font-bold" // Añadir pl-2 aquí
                                placeholder="Contraseña"
                                {...register("password", { required: true })}
                            />
                        </div>
                        
                    </div>
                    <button id="regis_boton" type='submit' className='bg-yellow-200 hover:bg-yellow-400 text-black font-bold uppercase transition duration-200 ease-in-out px-8 py-2 rounded-lg inline-flex items-center font-sans' onClick={identificarse}>Registrar</button>
                
            </div>
        </form>
    
    
    </>
    )
}

export default RegistrarDNI