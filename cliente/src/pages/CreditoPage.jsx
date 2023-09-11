import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLogin } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'
import Starts from '../components/Stars'
import { useReciboxH } from '../context/ReciboxHContext'

export default function CreditoPage() {
let a = 1;

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('cuotas');
    table.addEventListener('click', function (event) {
        const target = event.target;
        
        if (target.tagName === 'TD' && target.cellIndex === 0) {
            const row = target.parentNode;
            const id = row.getAttribute('data-id');
            eliminarFila(id);
        }
    });
});

function insertarFila() {
    const fechaVencimiento = document.getElementById('fecha_vencimiento').value;
    const montoCuota = document.getElementById('monto_cuota').value;

    if (fechaVencimiento.trim() === '' || montoCuota.trim() === '') {
        alert('Por favor, ingrese un valor en Fecha de Vencimiento y Monto de Cuota.');
        return;
    }

    let tblDatos = document.getElementById('cuotas');
    let newRow = tblDatos.insertRow(tblDatos.rows.length - 1);

    let col1 = newRow.insertCell(0);
    let col2 = newRow.insertCell(1);
    let col3 = newRow.insertCell(2);
    let col4 = newRow.insertCell(3);

    const id = 'fila' + a;
    col1.innerHTML = '<button class="text-red-500">x</button>';
    col2.innerHTML = a;
    col3.innerHTML = fechaVencimiento;
    col4.innerHTML = montoCuota;
    newRow.setAttribute('data-id', id);

    col1.firstChild.addEventListener('click', function () {
        eliminarFila(id);
    });

    a++;

    var table = document.getElementById('cuotas');

    var rows = table.getElementsByTagName('tr');

    var suma = 0;

    for (var i = 1; i < rows.length - 1; i++) {
        var cell = rows[i].getElementsByTagName('td')[3];
        if (cell) {
            suma += parseFloat(cell.textContent || cell.innerText);
        }
    }
    actualizarNumerosConsecutivos();
    document.getElementById('suma_tabla').textContent = suma;
}

function actualizarNumerosConsecutivos() {
    var table = document.getElementById('cuotas');
    var rows = table.getElementsByTagName('tr');
    
    for (var i = 1; i < rows.length - 1; i++) {
        var cell = rows[i].getElementsByTagName('td')[1];
        if (cell) {
            cell.textContent = i;
        }
    }
}

function eliminarFila(id) {
    var row = document.querySelector('tr[data-id="' + id + '"]');
    
    if (row) {
        row.parentNode.removeChild(row);
        recalcularSuma();
        actualizarNumerosConsecutivos();
    }
}

function recalcularSuma() {
    var table = document.getElementById('cuotas');
    var rows = table.getElementsByTagName('tr');
    var suma = 0;

    for (var i = 1; i < rows.length - 1; i++) {
        var cell = rows[i].getElementsByTagName('td')[3];
        if (cell) {
            suma += parseFloat(cell.textContent || cell.innerText);
        }
    }

    document.getElementById('suma_tabla').textContent = suma;
}

      function autocredito() {
    const medioDePagoSelect = document.querySelector('select[aria-label="Medio de Pago"]');
    const tipoDeMonedaSelect = document.querySelector('select[aria-label="Tipo de Moneda"]');
    
    tipoDeMonedaSelect.value = '1';
    medioDePagoSelect.value = '1';

    document.getElementById('description').value='NOTICIERO DEL CONTADOR S.A.C.';
    document.getElementById('observation').value='-';
    document.getElementById('date_issue').value='2023-09-13';
    document.getElementById('not_free').checked=true;
    document.getElementById('retention_no').checked=true;
    document.getElementById('payment_yes').checked=true;
    

    medioDePagoSelect.dispatchEvent(new Event('change'));
    }
  React.useEffect(() => {

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate()-2);
    const formattedDate = currentDate.toISOString().split('T')[0];
    document.getElementById('date_issue').setAttribute('min', formattedDate);

    const currentDate1 = new Date();
    currentDate1.setDate(currentDate1.getDate());
    const formattedDate1 = currentDate1.toISOString().split('T')[0];
    document.getElementById('fecha_vencimiento').setAttribute('min', formattedDate1);

    const input = document.getElementById('monto_total');
    const casillero = document.getElementById('total_neto');
    const porcentaje = document.getElementById('impuesto');
    const pendiente=document.getElementById('pendiente');

    input.addEventListener('input', function() {
        const valorInput = parseFloat(input.value);
        if (!isNaN(valorInput) || input.value === '')  {
            if (document.getElementById('retention_no').checked) {
                casillero.value = valorInput;
                porcentaje.value = 0;
                pendiente.value=casillero.value;
            } else {
                porcentaje.value = (valorInput * 0.08).toFixed(2);
                casillero.value = valorInput - porcentaje.value;
                pendiente.value=casillero.value;
            }
        } else {
            alert('Por favor, ingrese un valor numérico válido en el campo de monto total.');
        }
    });

    const retentionNo = document.getElementById("retention_no");

    const retentionSi = document.getElementById("retention_yes");

    retentionSi.addEventListener("click", function () {
        const valorInput = parseFloat(input.value);
      if (this.checked) {
            porcentaje.value = (valorInput * 0.08).toFixed(2);
            casillero.value = valorInput - porcentaje.value;
            pendiente.value=casillero.value;
      }
    });


    retentionNo.addEventListener("click", function () {
        const valorInput = parseFloat(input.value);
      if (this.checked) {
          porcentaje.value = "0";
          casillero.value= input.value;
        pendiente.value=casillero.value;
      }
    });
 
  }, []);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const {previewData} = useReciboxH()
  const [montoTotal, setMontoTotal] = useState(''); // Estado para "monto_total"
  const [totalNeto, setTotalNeto] = useState('');
  const [totalImpuesto, setTotalImpuesto] = useState('');

  const [selectedServ_prest, setSelectedServ_prest] = useState({
    checked: null
  });
  const [selectedInciso, setSelectedInciso] = useState({
    checked: null
  });
  const [selectedRetencion, setSelectedRetencion] = useState({
    checked: null
  });
  const [selectedServ_Pag, setSelectedServ_Pag] = useState({
    checked: null
  });

  const handleRadioChange = e => {
    setSelectedServ_prest({
      checked: e.target.value
    })
  };
  const handleRadioChange2 = e => {
    setSelectedInciso({
      checked: e.target.value
    })    
  };
  const handleRadioChange3 = e => {
    setSelectedRetencion({
      checked: e.target.value
    })
    if(selectedRetencion.checked==="0"){
      console.log("wasd")
      console.log("wasd",montoTotal)
      if(montoTotal!==''){
        const retencion = (parseFloat(montoTotal) * 0.08).toFixed(2);
        setTotalImpuesto(retencion)
        setTotalNeto(montoTotal-retencion)
      }
    }else{
      setTotalImpuesto('')
      setTotalNeto(montoTotal)
    }
  };
  const handleRadioChange4 = e => {
    setSelectedServ_Pag({
      checked: e.target.value
    })
  };

  const handleMontoTotalChange = (event) => {
    const newValue = event.target.value;
    setMontoTotal(newValue)
    setTotalNeto(newValue)    
  }

  

  const onSubmit = handleSubmit((values) => {
    values.serv_prest = selectedServ_prest.checked
    values.inciso = selectedInciso.checked
    values.retencion = selectedRetencion.checked
    values.serv_pago = selectedServ_Pag.checked
    console.log(values)
    previewData(values)
  })

useEffect(()=>{
  setSelectedRetencion({
    checked:"0"
  })
  setSelectedServ_prest({
    checked:"0"
  })
  setSelectedInciso({
    checked:"1"
  })
  setSelectedServ_Pag({
    checked:"1"
  })
},[])

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <section className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md">
        <h1 className="text-2xl font-bold text-center text-yellow-100 mb-6" onClick={autocredito}>
          Emisión del Recibo por Honorarios Electrónico
        </h1>
        <form>
          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique los datos del servicio prestado
            </h1>
            <form action="submit.php" method="post">
              <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                Descripción o Título de Servicio Prestado:
              </label>
              <input
                id="description"
                name="description"
                type="text"
                aria-label="default input example"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"{...register("descripcion_rxh", { required: true })}
              />
              <label htmlFor="observation" className="text-gray-400 font-sans font-semibold">
                Observación (Opcional):
              </label>
              <input
                id="observation"
                name="observation"
                type="text"
                aria-label="default input example"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-bold text-gray-300 focus:border-yellow-100" {...register("obs_rxh", { required: true })}
              />
              <label htmlFor="date_issue" className="text-gray-400 font-sans font-semibold">
                Fecha de Emisión:
              </label>
              <input
                type="date"
                id="date_issue"
                name="date_issue"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100" {...register("fecha_emision", { required: true })} 
              />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              Indique el tipo de Renta de Cuarta Categoría, de acuerdo al inciso aplicable del artículo 33 LIR
            </h1>
            <form action="submit.php" method="post">
              <input
                type="radio"
                id="free"
                name="free"
                value="1"
                className="mr-2"
                checked={selectedInciso.checked === '1'}
              onChange={handleRadioChange2}
              />
              <label htmlFor="free" className="text-gray-400 font-sans font-semibold">
                Inciso A: El ejercicio individual, de acuerdo profesión, arte, ciencia, oficio o actividades no incluidas expresamente en la tercera categoría.
              </label>
              <br/>
              <div className="h-3"></div>
              <input
                type="radio"
                id="not_free"
                name="free"
                value="0"
                className="mr-2"
                checked={selectedInciso.checked === '0'}
              onChange={handleRadioChange2}
              />
              <label htmlFor="not_free" className="text-gray-400 font-sans font-semibold">
                Inciso B: El desempeño de funciones de funciones de director de empresas, síndico, mandatario, gestor de negocios, albacea y actividades similares, incluyendo el desempeño de las funciones del consejero regional, por las cuales perciban dietas.
              </label>
              <br />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              Retención del Impuesto a la Renta
            </h1>
            <form action="submit.php" method="post">
              <input
                type="radio"
                id="retention_yes"
                name="retention"
                value="1"
                className="mr-2"
                checked={selectedRetencion.checked === '1'}
              onChange={handleRadioChange3}
              />
              <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                SI
              </label>
              <br />
              <div className="h-1"></div>
              <input
                type="radio"
                id="retention_no"
                name="retention"
                value="0"
                className="mr-2"
              checked={selectedRetencion.checked === '0'}
              onChange={handleRadioChange3}
              />
              <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                NO
              </label>
              <br />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              ¿El pago total del servicio está siendo efectuado al momento de la emisión de este comprobante?
            </h1>
            <form action="submit.php" method="post">
              <input
                type="radio"
                id="payment_yes"
                name="payment"
                value="1"
                className="mr-2"
                checked={selectedServ_Pag.checked === '1'}
                onChange={handleRadioChange4}
              />
              <label htmlFor="payment_yes" className="text-gray-400 font-sans font-semibold">
                SI
              </label>
              <br />
              <input
                type="radio"
                id="payment_no"
                name="payment"
                value="0"
                className="mr-2"
                checked={selectedServ_Pag.checked === '0'}
                onChange={handleRadioChange4}
              />
              <label htmlFor="payment_no" className="text-gray-400 font-sans font-semibold">
                NO
              </label>
              <br />
              <div className="h-2"></div>
              <select
                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                aria-label="Medio de Pago"
                {...register("medio_pago")}
              >
                <option selected>-- Seleccione Medio de Pago --</option>
                <option value="1">Depósito de Cuenta</option>
                <option value="2">Giro</option>
                <option value="3">Transferencia de Fondos</option>
                <option value="4">Orden de Pago</option>
                <option value="5">Tarjeta de Débito</option>
                <option value="6">Tarjeta de Crédito emitida en el país por una empresa del Sistema Financiero</option>
                <option value="7">Cheques con Claúsula: No negociables - Intransferibles - No a la orden o similar</option>
                <option value="8">Efectivo - Por operaciones donde no existe obligación de utilizar Medios de Pago</option>
                <option value="9">Efectivo - en los demás casos</option>
                <option value="10">Medios de Pago Usados en Comercio Exterior</option>
                <option value="11">Documentos de EDPYMES y Cooperativas de Ahorro y Crédito</option>
                <option value="12">Tarjeta de Crédito emitida o no en el país por entes ajenos al Sistema F.</option>
                <option value="13">Tarjetas de Crédito emitidas en el exterior por bancos o F. no domiciliadas</option>
              </select>
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique el monto de los Honorarios
            </h1>
            <h1 className="text-base font-bold text-gray-400 mb-3">
              Tipo de Moneda
            </h1>
            <select
              className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              aria-label="Tipo de Moneda"
              {...register("tipo_moneda")}
            >
            <option selected>-- Tipo de cambio --</option>
              <option value="1">SOL</option>
              <option value="2">DOLAR</option>
              <option value="3">EURO</option>
            </select>
            <div className="h-1"></div>
            <form action="submit.php" method="post">
              <label htmlFor="honorarios" className="text-gray-400 font-sans font-bold">
                Monto total de los honorarios:
              </label>
              <input
                id="monto_total"
                className="monto w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
                onChange={handleMontoTotalChange}
              />
              {errors.monto_total && (<p className='text-red-500'>Llenar el campo</p>)}
              <div className="h-1"></div>
              <label htmlFor="retencion" className="text-gray-400 font-sans font-bold">
                Retención (8%) Impuesto a la Renta:
              </label>
              <input
                id="impuesto"
                className="monto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
                disabled
                value={totalImpuesto}
              />
              <label htmlFor="total_net" className="text-gray-400 font-sans font-bold">
                Total Neto Recibido:
              </label>
              <input
                id="total_neto"
                className="monto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
                disabled
                value={totalNeto}
              />
            </form>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique Información del Crédito
            </h1>
            <form action="submit.php" method="post">
              <label htmlFor="monto_pendiente" className="text-gray-400 font-sans font-bold">
                Monto Neto Pendiente de Pago:
              </label>
              <input
                disabled
                id="pendiente"
                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
            <div className="h-4"></div>
            <div className="bg-zinc-800 p-4 rounded-lg mb-4">
              <h1 className="text-base font-bold mb-3 text-white">
                Agregue las cuotas asociadas al crédito:
              </h1>
              <label htmlFor="fecha_vencimiento" className="text-gray-400 font-sans font-bold">
                Fecha de Vencimiento:
              </label>
              <input
                type="date"
                id="fecha_vencimiento"
                name="fecha_vencimiento"
                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
              />
              <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                Monto de Cuota:
              </label>
              <input
                className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                type="text"
                id="monto_cuota"
                placeholder="0.00"
                aria-label=".form-control-lg example"
              />
              <div className="h-1"></div>
              <div className="flex justify-end">
              <input
                id="agregar"
                type="button"
                value="Agregar Cuota"
                className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                onClick={insertarFila}
              />
              </div>
            </div>
              <h1 className="text-gray-400 font-sans font-bold">
                Máximo podrá agregar hasta 60 Cuotas
              </h1>
              <div className="mx-auto bg-text-zinc-900 p-6 dark:text-white">
                <table id="cuotas" className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md overflow-hidden">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border bg-gray-500 text-gray-300">Eliminar</th>
                        <th className="border bg-zinc-500 text-gray-300">Número Cuota</th>
                        <th className="border bg-zinc-500 text-gray-300">Fecha Vencimiento</th>
                        <th className="border bg-zinc-500 text-gray-300">Monto Cuota</th>
                    </tr>
                    </thead>
                    <tbody className="font-sans font-semibold border border-gray-400 text-gray-200 text-center">
                    <tr>
                        <td className="bg-zinc-600" >Total</td>
                        <td></td>
                        <td ></td>
                        <td id="suma_tabla" className="bg-zinc-600">0</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </form>
          </div>
          <div className="h-3"></div>
          <div className="grid grid-cols-2 gap-4">
          <input
            type="submit"
            value="Continuar"
            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-zinc-900 hover:border-amber-200"
          />
          <input
            type="submit"
            value="Cancelar"
            className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-white hover:border-gray-400"
          />
          </div>
        </form>
      </section>
    </div>
  );
}