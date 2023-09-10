import React from 'react'
import Imagen from '../assets/images/sunat.png'
import Imagen1 from '../assets/images/image.png'
import Imagen2 from '../assets/images/unjbg.png'
import Imagen3 from '../assets/images/atencion.png'

function HomePage() {
  const estilo = {
    backgroundImage: `url(${Imagen1})`,
  };
  return (
    <>
    <div>
      <div className="container min-h-screen bg-center bg-cover px-28 py-5 relative" style={estilo}>
        <nav class="flex items-center">
          <img src={Imagen} class="w-40 cursor-pointer"></img>
          <ul class="flex-1 text-center">
            <li class="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent"><a href="https://ww1.sunat.gob.pe/index.html#tramites-y-servicios" class="no-underline text-white px-2">Trámites y Servicios</a></li>
            <li class="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent"><a href="https://ww1.sunat.gob.pe/index.html#campanas" class="no-underline text-white px-2">Campañas</a></li>
            <li class="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent"><a href="https://ww1.sunat.gob.pe/index.html#contacto" class="no-underline text-white px-2">Contactos y Redes Sociales</a></li>
            <li class="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent"><a href="https://ww1.sunat.gob.pe/index.html#informacion-institucional" class="no-underline text-white px-2">Información Institucional</a></li>
          </ul>
          <img src={Imagen2} class="w-14 cursor-pointer"></img>
        </nav>

        <div class="text-white mt-48 max-w-2xl">
          <h1 class="text-6xl font-semibold leading-normal text-white">SUNAT<br></br>Operaciones <span class="font-light">en linea</span></h1>
          <p>Administramos los tributos del Gobierno Nacional Peruano<br></br>MIS TRÁMITES Y CONSULTAS: Acceso a trámites y consultas virtuales para Personas, Empresas y Operadores de Comercio Exterior.</p>

          <div class="mt-10">
            <a href="MenuPage.jsx" class="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent">Ingresar</a>
            <a href="LoginPage.jsx">Registrarse <span class="text-lg inline-block rotate-90">&#10148;</span></a>
          </div>

        </div>
        <img src={Imagen3} class="w-full xl:w-1/4 xl:absolute bottom-8 right-56"></img>

      </div>  
    </div>
    </>
  )
}

export default HomePage