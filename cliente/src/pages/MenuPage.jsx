import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../components/Stars';
import ExamplePDF from './ExamplePDF'
function MenuPage() {
  const handleCerrarSesion = () => {
    localStorage.clear();
  };

  return (
    <section className="p-10 mt-8">
      <Stars></Stars>
      <div className="container mx-auto mb-8 text-center">
        <h1 className="text-6xl md:text-6xl font-bold text-ffeba7 mb-4 animate-pulse shadow-md text-red text-bold font-mono">
          TIPO DE DOCUMENTO FUENTE
        </h1>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
      >
        <li>
          <div
            className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 hover:border-amber-200 transition-transform w-60 mx-auto block"
          >
            <div className="card__front p-4 text-center">
              <img
                className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                src="https://w7.pngwing.com/pngs/842/82/png-transparent-payment-bill-invoice-receipt-business-business-icon.png"
                alt="Factura"
              />
              <div className="flow-content gap-1 mt-6">
                <p className="card__name font-bold text-lg text-bold font-mono">FACTURA</p>
                <p className="card__position text-sm text-bold font-mono text-white">En desarrollo</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to={'/rxh'}>
            <div
              className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 hover:border-amber-200 transition-transform w-60 mx-auto block"
            >
              <div className="card__front p-4 text-center">
                <img
                  className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ULqjtOVKqEN7bbuaIyyJXsNHycqU0AL9pEuR8sU&s"
                  alt="Honorarios"
                />
                <div className="flow-content gap-1 mt-6">
                  <p className="card__name font-bold text-lg text-bold font-mono">HONORARIOS</p>
                  <p className="card__position text-sm text-bold font-mono text-white">Recibo de pago</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <div
            className="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 hover:border-amber-200 transition-transform w-60 mx-auto block"
          >
            <div className="card__front p-4 text-center">
              <img
                className="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                src="https://www.cajaabogados.org.ar/getfile.php?f=2e2002b29cd5e1070770d90de800cdde.jpg"
                alt="Boleta de Venta"
              />
              <div className="flow-content gap-1 mt-6">
                <p className="card__name font-bold text-lg text-bold font-mono">BOLETA DE VENTA</p>
                <p className="card__position text-sm text-bold font-mono text-white">En desarrollo</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex justify-center mt-4">
        <button
          className="bg-transparent border border-ffeba7 text-ffeba7 hover:bg-ffeba7 hover:text-white hover:border-amber-200 font-bold py-2 px-4 rounded transition-transform transform hover:scale-125 text-bold font-mono"
          onClick={handleCerrarSesion}
        >
          Cerrar Sesión
        </button>
        <ExamplePDF/>
      </div>
    </section>
  );
}

export default MenuPage;