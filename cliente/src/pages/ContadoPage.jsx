import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Starts from '../components/Stars';
import { useReciboxH } from '../context/ReciboxHContext';

export default function ContadoPage() {
  React.useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate()-2);
    const formattedDate = currentDate.toISOString().split('T')[0];
    document.getElementById('date_issue').setAttribute('min', formattedDate);

    const currentDate1 = new Date();
    currentDate1.setDate(currentDate1.getDate());
    const formattedDate1 = currentDate1.toISOString().split('T')[0];
    document.getElementById('date_expiration').setAttribute('min', formattedDate1);
      }, []);
      
  const { registrarContado, errors: LoginErrors } = useLogin();
  const navigate=useNavigate();
  const { previewData } = useReciboxH();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [montoTotal, setMontoTotal] = useState('');
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

  useEffect(() => {
    setSelectedRetencion({
      checked: "0"
    });
    setSelectedServ_prest({
      checked: "0"
    });
    setSelectedInciso({
      checked: "1"
    });
    setSelectedServ_Pag({
      checked: "1"
    });
  }, []);

  const handleRadioChange = e => {
    setSelectedServ_prest({
      checked: e.target.value
    });
  };

  const handleRadioChange2 = e => {
    setSelectedInciso({
      checked: e.target.value
    });
  };

  const handleRadioChange3 = e => {
    setSelectedRetencion({
      checked: e.target.value
    });
    if (selectedRetencion.checked === "0") {
      if (montoTotal !== '') {
        const retencion = (parseFloat(montoTotal) * 0.08).toFixed(2);
        setTotalImpuesto(retencion);
        setTotalNeto(montoTotal - retencion);
      }
    } else {
      setTotalImpuesto('');
      setTotalNeto(montoTotal);
    }
  };

  const handleRadioChange4 = e => {
    setSelectedServ_Pag({
      checked: e.target.value
    });
  };

  const handleMontoTotalChange = (event) => {
    const newValue = event.target.value;
    setMontoTotal(newValue);
    setTotalNeto(newValue);
  };

  const precargado = () => {
    setValue('descripcion_rxh', "TEST 1");
    setValue('fecha_emision', '2023-09-09');
    setValue('fecha_vencimiento', '2023-09-09');
    setValue('medio_pago', '2');
    setValue('monto_total', '1500');
    setValue('obs_rxh', 'SIN OBS');
    setValue('tipo_moneda', '2');
  };

  const onSubmit = handleSubmit(async(values) => {
    values.montoTotal=montoTotal;
    values.totalImpuesto=totalImpuesto;
    values.totalNeto=totalNeto;
    values.serv_prest = selectedServ_prest.checked;
    values.inciso = selectedInciso.checked;
    values.retencion = selectedRetencion.checked;
    values.serv_pago = selectedServ_Pag.checked;
    console.log(values);

    const data= await registrarContado(values);
      if(data.status===200){
        navigate('/previewcont')
      }
  });

  const onSubmit1 = () => {
    navigate('/rxh')
  };


  return (
    
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <section className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md">
        <h2 className="text-2xl font-bold text-center text-yellow-100 mb-6" onClick={precargado}>
          Emisión del Recibo por Honorarios Electrónico
        </h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
          <div className="col-span-2 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">Indique los datos del servicio prestado</h1>
            <label htmlFor="free" className="text-gray-400 font-sans font-semibold">
              El Servicio se Prestó a Título Gratuito:
              <input
                type="radio"
                id='free'
                name="free"
                value="1"
                className="ml-2"
                checked={selectedServ_prest.checked === "1"}
                onChange={handleRadioChange}
              />
              <span className="ml-2 text-gray-400 font-sans font-semibold">SI</span>
              <input
                type="radio"
                id="not_free"
                name="free"
                value="0"
                className="ml-2"
                checked={selectedServ_prest.checked === "0"}
                onChange={handleRadioChange}
              />
              <span className="ml-2 text-gray-400 font-sans font-semibold">NO</span>
            </label>
            <label htmlFor="message" className="mt-4 block text-gray-400 font-sans font-semibold">
              Descripción o Título de Servicio Prestado:
              <input
                id="description"
                name="description"
                type="text"
                aria-label="default input example"
                className="w-full mt-1 border border-gray-900 bg-gray-900 rounded-md py-2 px-3 text-gray-300 focus:border-yellow-100"
                {...register("descripcion_rxh", { required: true })}
              />
              {errors.descripcion_rxh && (<p className='text-red-500'>Llenar el campo</p>)}
            </label>
            <label htmlFor="message" className="mt-4 block text-gray-400 font-sans font-semibold">
              Observación (Opcional):
              <input
                id="observation"
                name="observation"
                type="text"
                aria-label="default input example"
                className="w-full mt-1 border border-gray-900 bg-gray-900 rounded-md py-2 px-3 text-gray-300 focus:border-yellow-100"
                {...register("obs_rxh", { required: true })}
              />
              {errors.obs_rxh && (<p className='text-red-500'>Llenar el campo</p>)}
            </label>
            <label htmlFor="date_issue" className="mt-4 block text-gray-400 font-sans font-semibold">
              Fecha de Emisión:
              <input
                type="date"
                id="date_issue"
                name="date_issue"
                className="w-full mt-1 border border-gray-900 bg-gray-900 rounded-md py-2 px-3 text-gray-300 focus:border-yellow-100"
                {...register("fecha_emision", { required: true })}
              />
              {errors.fecha_emision && (<p className='text-red-500'>Llenar el campo</p>)}
            </label>
            <label htmlFor="date_expiration" className="mt-4 block text-gray-400 font-sans font-semibold">
              Fecha de Vencimiento (Opcional):
              <input
                type="date"
                id="date_expiration"
                name="date_expiration"
                className="w-full mt-1 border border-gray-900 bg-gray-900 rounded-md py-2 px-3 text-gray-300 focus:border-yellow-100"
                {...register("fecha_vencimiento", { required: true })}
              />
              {errors.fecha_vencimiento && (<p className='text-red-500'>Llenar el campo</p>)}
            </label>
          </div>

          <div className="col-span-2 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
              Indique el tipo de Renta de Cuarta Categoría, de acuerdo al inciso aplicable del artículo 33 LIR:
            </h1>

            <input
              type="radio"
              id="inciso"
              name="free_inciso"
              value="1"
              className="mr-2"
              checked={selectedInciso.checked === '1'}
              onChange={handleRadioChange2}
            />
            <label htmlFor="free_inciso" className="text-gray-400 font-sans font-semibold">
              Inciso A: El ejercicio individual, de acuerdo profesión, arte, ciencia, oficio o actividades no incluidas expresamente en la tercera categoría.
            </label>
            <br />
            <div className="h-3"></div>
            <input
              type="radio"
              id="not_inciso"
              name="not_free_inciso"
              value="0"
              className="mr-2"
              checked={selectedInciso.checked === '0'}
              onChange={handleRadioChange2}
            />
            <label htmlFor="not_free_inciso" className="text-gray-400 font-sans font-semibold">
              Inciso B: El desempeño de funciones de funciones de director de empresas, síndico, mandatario, gestor de negocios, albacea y actividades similares, incluyendo el desempeño de las funciones del consejero regional, por las cuales perciban dietas.
            </label>
            <br />
          </div>

          <div className="col-span-2 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-yellow-100 mb-4">Retención del Impuesto a la Renta:</h1>

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
          </div>

          <div className="col-span-2 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
              ¿El pago total del servicio está siendo efectuado al momento de la emisión de este comprobante?
            </h1>

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
              <option value="0">-- Seleccione Medio de Pago --</option>
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
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mb-4 col-span-2">
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
              <option value="0">-- Tipo de cambio --</option>
              <option value="1">SOL</option>
              <option value="2">DOLAR</option>
              <option value="3">EURO</option>
            </select>
            <div className="h-1"></div>
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
              value={totalNeto}
            />
          </div>

          <input
            type="submit"
            value="Continuar"
            onClick={onSubmit}
            className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-6 rounded-md mr-4 hover:bg-yellow-200 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-zinc-900 hover:border-amber-200"
          />
          <input
            type="submit"
            value="Cancelar"
            onClick={onSubmit1}
            className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-white hover:border-gray-400"
          />
        </form>
      </section>
    </div>
  );
}