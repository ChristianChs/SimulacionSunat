import React, { useState, useEffect } from 'react';
import Imagen from '../assets/images/sunat.png';
import Imagen1 from '../assets/images/fondo.jpg';
import Imagen2 from '../assets/images/unjbg.png';
import Imagen3 from '../assets/images/atencion.png';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <div className='container mx-auto px-4 md:px-10 py-5 relative'>
          <nav className='flex items-center justify-between'>
                      <img
              src={Imagen}
              className={`w-32 md:w-40 cursor-pointer ${isLargeScreen ? 'md:flex' : 'hidden'}`}
              alt='Logo'
            />

            {isLargeScreen ? (
              <ul className='flex-1 text-center space-x-4 md:space-x-8'>
                <li className="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent hover:scale-105">
                  <a href="https://ww1.sunat.gob.pe/index.html#tramites-y-servicios" className='no-underline text-white px-2'>Trámites y Servicios</a>
                </li>
                <li className="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent hover:scale-105">
                  <a href="https://ww1.sunat.gob.pe/index.html#campanas" className='no-underline text-white px-2'>Campañas</a>
                </li>
                <li className="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent hover:scale-105">
                  <a href="https://ww1.sunat.gob.pe/index.html#contacto" className='no-underline text-white px-2'>Contactos y Redes Sociales</a>
                </li>
                <li className="list-none inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent hover:scale-105">
                  <a href="https://ww1.sunat.gob.pe/index.html#informacion-institucional" className='no-underline text-white px-2'>Información Institucional</a>
                </li>
              </ul>
            ) : (
              <div className="md:hidden">
                <button onClick={toggleMenu} className={`text-white ${menuOpen ? 'open' : ''}`}>
                  ☰ {/* Icono de hamburguesa */}
                </button>
                {menuOpen && (
                  <ul className='text-center'>
                    <li>
                      <a href="https://ww1.sunat.gob.pe/index.html#tramites-y-servicios" className='list-none text-white inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-yellow duration-300 hover:border border border-transparent transform hover:scale-105 transition-transform'>Trámites y Servicios</a>
                    </li>
                    <li>
                      <a href="https://ww1.sunat.gob.pe/index.html#campanas" className='list-none text-white inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-yellow duration-300 hover:border border border-transparent transform hover:scale-105 transition-transform'>Campañas</a>
                    </li>
                    <li>
                      <a href="https://ww1.sunat.gob.pe/index.html#contacto" className='list-none text-white inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-yellow duration-300 hover:border border border-transparent transform hover:scale-105 transition-transform'>Contactos y Redes Sociales</a>
                    </li>
                    <li>
                      <a href="https://ww1.sunat.gob.pe/index.html#informacion-institucional" className='list-none text-white inline-block px-5 hover:bg-transparent hover:border-yellow-300 hover:text-yellow duration-300 hover:border border border-transparent transform hover:scale-105 transition-transform'>Información Institucional</a>
                    </li>
                  </ul>
                )}
              </div>
            )}
            <img src={Imagen2} className='w-10 md:w-14 cursor-pointer' alt='Image 2' />
          </nav>
        </div>
      </div>
      <div>
          <div>
            <div className='container mx-auto px-4 md:px-10 py-5 relative'>
              <div className='text-white mt-8 md:mt-24 max-w-3xl'>
                <h1 className='text-6xl md:text-6xl font-semibold leading-normal text-white'>
                  SUNAT
                </h1>
                <h1 className='font-normal font-mono text-yellow text-4xl text-bold'>
                  Operaciones en línea
                </h1>
                <br></br>  
                <p className='text-sm font-mono'>
                  Administramos los tributos del Gobierno Nacional Peruano<br></br>Acceso a trámites y consultas virtuales para Entidades de Comercio.
                </p>

                <div className='mt-6 md:mt-10'>
                  <a href="/login" className='bg-primary rounded-3xl py-3 px-8 font-medium inline-block mr-4 object-cover border-1 hover:scale-0.75 hover:bg-zinc-900 border-white hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent'>Ingresar</a>
                  <a href="/regis">Registrarse <span className='text-lg inline-block rotate-90'>&#10148;</span></a>
                </div>
              </div>
            </div>
            <div>
              {isLargeScreen ? (
                <img src={Imagen3} className='hidden md:block w-1/3 xl:w-1/3 absolute top-20 right-20' alt='Image 3' />
              ) : null}
            </div>
          </div>
      </div>
    </div>
  );
}

export default HomePage;
