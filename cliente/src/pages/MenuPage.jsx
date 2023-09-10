import React from 'react'
import { useLogin } from '../context/LoginContext'

function MenuPage() {
  const {isAuthenticated} = useLogin()

  console.log(isAuthenticated)
  return (

  <body class="bg-gradient-to-b from-131720 to-1b2634 text-secondary">
    <section class="p-10 mt-8">
      <div class="container mx-auto mb-8 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-ffeba7 mb-4 animate-pulse shadow-md text-red">TIPO DE DOCUMENTO FUENTE</h1>

      </div>
      <ul role="list" class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        <li>
          <a href="link_a_tu_pagina_1.html" class="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 transition-transform w-60 mx-auto block">
            <div class="card__front p-4 text-center">
              <img class="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                  src="https://w7.pngwing.com/pngs/842/82/png-transparent-payment-bill-invoice-receipt-business-business-icon.png" />
              <div class="flow-content gap-1 mt-6">
                <p class="card__name font-bold text-lg">FACTURA</p>
                <p class="card__position text-sm">En desarrollo</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="link_a_tu_pagina_2.html" class="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 transition-transform w-60 mx-auto block">
            <div class="card__front p-4 text-center">
              <img class="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ULqjtOVKqEN7bbuaIyyJXsNHycqU0AL9pEuR8sU&s" />
              <div class="flow-content gap-1 mt-6">
                <p class="card__name font-bold text-lg">HONORARIOS</p>
                <p class="card__position text-sm">Recibo de pago</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="link_a_tu_pagina_3.html" class="card relative bg-zinc-900 text-primary border rounded-lg overflow-hidden hover:scale-125 transition-transform w-60 mx-auto block">
            <div class="card__front p-4 text-center">
              <img class="card__img mx-auto w-20 h-20 rounded-full object-cover border-2 border-secondary"
                  src="https://www.cajaabogados.org.ar/getfile.php?f=2e2002b29cd5e1070770d90de800cdde.jpg"/>
              <div class="flow-content gap-1 mt-6">
                <p class="card__name font-bold text-lg">BOLETA DE VENTA</p>
                <p class="card__position text-sm">En desarrollo</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </body>
        
  )
}

export default MenuPage