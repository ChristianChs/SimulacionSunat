import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Starts from '../components/Stars'
import { useLogin } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom';

function FacturaForm() {
    let a = 1;
    const { registrarFactura, errors: LoginErrors } = useLogin();
    const { registrarPFactura, errors: LoginErrors2 } = useLogin();
    function insertarFila() {
        /*const fechaVencimiento = document.getElementById('fecha_vencimiento').value;
        const montoCuota = document.getElementById('monto_cuota').value;*/


        let tblDatos = document.getElementById('bienesServicios');
        let newRow = tblDatos.insertRow(tblDatos.rows.length - 4);

        let col1 = newRow.insertCell(0);
        let col2 = newRow.insertCell(1);
        let col3 = newRow.insertCell(2);
        let col4 = newRow.insertCell(3);
        let col5 = newRow.insertCell(4);
        let col6 = newRow.insertCell(5);
        let col7 = newRow.insertCell(6);
        let col8 = newRow.insertCell(7);
        let col9 = newRow.insertCell(8);
        let col10 = newRow.insertCell(9);


        const id = 'fila' + a;
        col1.innerHTML = '<button class="text-red-500">x</button>';
        col2.innerHTML = document.getElementById('cant').value;
        col3.innerHTML = document.getElementById('medida').value;
        col4.innerHTML = document.getElementById('cod').value;
        col5.innerHTML = document.getElementById('des').value;
        col6.innerHTML = document.getElementById('uni').value;
        col7.innerHTML = document.getElementById('bols_tot').value;
        col8.innerHTML = iTotal;
        col9.innerHTML = document.getElementById('valorParcialIsc').value;
        col10.innerHTML = document.getElementById('igvParcial').value;
        newRow.setAttribute('data-id', id);
        col8.style.display = 'none';
        col9.style.display = 'none';
        col10.style.display = 'none';

        col1.firstChild.addEventListener('click', function () {
            eliminarFila(id);
        });

        a++;

        var table = document.getElementById('bienesServicios');

        var rows = table.getElementsByTagName('tr');

        var sumaImporte = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[7];
            if (cell) {
                sumaImporte += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_importeTotal').textContent = sumaImporte.toFixed(2);

        var sumaISC = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[8];
            if (cell) {
                sumaISC += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_isc').textContent = sumaISC.toFixed(2);

        var sumaIGV = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[9];
            if (cell) {
                sumaIGV += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_igv').textContent = sumaIGV.toFixed(2);

        var sumaICBPER = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[6];
            if (cell) {
                sumaICBPER += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_icbper').textContent = sumaICBPER.toFixed(2);

        actualizarNumerosConsecutivos();
    }

    function eliminarFila(id) {
        var row = document.querySelector('tr[data-id="' + id + '"]');

        if (row) {
            row.parentNode.removeChild(row);
            recalcularSuma();
            actualizarNumerosConsecutivos();
        }
    }

    function actualizarNumerosConsecutivos() {
        var table = document.getElementById('bienesServicios');
        var rows = table.getElementsByTagName('tr');

        for (var i = 1; i < rows.length - 1; i++) {
            var cell = rows[i].getElementsByTagName('td')[1];
        }
    }

    function recalcularSuma() {
        var table = document.getElementById('bienesServicios');

        var rows = table.getElementsByTagName('tr');

        var sumaImporte = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[7];
            if (cell) {
                sumaImporte += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_importeTotal').textContent = sumaImporte.toFixed(2);

        var sumaISC = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[8];
            if (cell) {
                sumaISC += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_isc').textContent = sumaISC.toFixed(2);

        var sumaIGV = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[9];
            if (cell) {
                sumaIGV += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_igv').textContent = sumaIGV.toFixed(2);

        var sumaICBPER = 0;

        for (var i = 1; i < rows.length - 4; i++) {
            var cell = rows[i].getElementsByTagName('td')[6];
            if (cell) {
                sumaICBPER += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_icbper').textContent = sumaICBPER.toFixed(2);
    }

    const [igvNeto, setigvNeto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [valorUnitario, setValorUnitario] = useState(0);
    const [mfinal, setMFinal] = useState(0);
    const [iTotal, setITotal] = useState(0);
    const [selectedValue, setSelectedValue] = useState("1");
    const [selectedIgvTipo, setSelectedIgvTipo] = useState("2");
    const [selectedImpBols, setSelectedImpBols] = useState("0");
    const [selectedYear, setSelectedYear] = useState("nada");
    const [mostrarIsc, setMostrarIsc] = useState(false);
    const [tipoIsc, setTipoIsc] = useState("valor");
    const [montoIsc, setMontoIsc] = useState(0);
    const [valorISC, setValorIsc] = useState(0);

    const handleTipoIscChange = (event) => {
        setValorIsc(document.getElementById('valorISC').value);
        setTipoIsc(event.target.value);
        updateMFinal(cantidad, valorUnitario);
    };

    const yearToValueMap = {
        'nada': 0,
        '2019': 0.1,
        '2020': 0.2,
        '2021': 0.3,
        '2022': 0.4,
        '2023': 0.5,
    };

    const handleYearChange = (e) => {
        const selectedValue = yearToValueMap[e.target.value];
        setSelectedYear(e.target.value);

        document.getElementById('imp_Bols').value = selectedValue;


        const bols_total = selectedValue * document.getElementById('cant').value;
        document.getElementById('bols_tot').value = bols_total.toFixed(2)

        const cantValue = parseFloat(document.getElementById('cant').value);

        const uniValue = parseFloat(document.getElementById('uni').value);

        const montoCuotaValue = parseFloat(document.getElementById('igvParcial').value);

        if (tipoIsc === 'monto') {
            let valorIntroducidoIsc = document.getElementById('valorISC').value;
            document.getElementById('valorParcialIsc').value = valorIntroducidoIsc;
        } else {
            let valorIntroducidoIsc = document.getElementById('valorISC').value;
            valorIntroducidoIsc = valorIntroducidoIsc * valorUnitario * cantidad / 100;
            document.getElementById('valorParcialIsc').value = valorIntroducidoIsc;
        }
        const igvPar = parseFloat(document.getElementById('valorParcialIsc').value);

        let montoTotalValue = (cantValue * uniValue) + montoCuotaValue + bols_total + igvPar;
        montoTotalValue = montoTotalValue.toFixed(2);
        console.log("montoTotalValue:", montoTotalValue);
        setITotal(montoTotalValue);
    };

    const handleIscChange = (event) => {
        const isISC = event.target.value === "1";
        document.getElementById('valorISC').value = 0;
        setMostrarIsc(isISC);
        updateMFinal(cantidad, valorUnitario);
    };


    const handleIgvTipoChange = (e) => {
        const newValue = e.target.value;
        setSelectedIgvTipo(newValue);

        updateMFinal(cantidad, valorUnitario);
    };

    const handleImpBolsChange = (e) => {
        const newValue = e.target.value;
        setSelectedImpBols(newValue);

        setSelectedbolsas({
            checked: e.target.value
        });

        if (newValue === "0") {
            setSelectedYear("nada");
            handleYearChange(e)
            document.getElementById('imp_Bols').value = 0;
        }
        updateMFinal(cantidad, valorUnitario);
    };

    const handle = (event) => {
        const newValue = event.target.value;
        setCantidad(newValue);
        updateMFinal(newValue, valorUnitario);
    };

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
        updateMFinal(cantidad, valorUnitario);
    };

    const onChangeMonto = (e) => {
        const value = e.target.value;

        setValor(value);
        setValorUnitario(value);
        updateMFinal(cantidad, value);
    };

    const updateMFinal = (newCantidad, newValorUnitario) => {
        const tipoValue = document.querySelector('input[name="igvtipo"]:checked') ? document.querySelector('input[name="igvtipo"]:checked').value : null;
        const porcentajeText = 0.18;

        let res = 0;

        if (tipoValue === "1" || tipoValue === "0") {
            res = 0;
        } else {
            res = newValorUnitario * newCantidad * porcentajeText;
        }

        if (tipoIsc === 'monto') {
            let valorIntroducidoIsc = document.getElementById('valorISC').value;
            document.getElementById('valorParcialIsc').value = valorIntroducidoIsc;
        } else {
            let valorIntroducidoIsc = document.getElementById('valorISC').value;
            valorIntroducidoIsc = valorIntroducidoIsc * valorUnitario * cantidad / 100;
            document.getElementById('valorParcialIsc').value = valorIntroducidoIsc;
        }

        console.log(res)

        document.getElementById('igvParcial').value = res;

        const valorIsc1 = parseFloat(document.getElementById('valorParcialIsc').value);
        const total_bolsas = document.getElementById('imp_Bols').value * newCantidad;
        document.getElementById('bols_tot').value = total_bolsas.toFixed(2);

        const resRedondeado = res.toFixed(2);
        const i = valorIsc1 + res + newValorUnitario * newCantidad;

        // Convert impTotalFinal to a number (remove .toFixed)
        const impTotalFinal = parseFloat(i) + parseFloat(total_bolsas);

        // Now, impTotalFinal is a number, and you can use it for calculations or display.
        setITotal(impTotalFinal.toFixed(2));
        setMFinal(resRedondeado);
    };


    const onChangeValorIsc = (e) => {
        let value = e.target.value;
        setValorIsc(value);
        updateMFinal(cantidad, valorUnitario);
    };


    const [mostrarRucReceptor, setMostrarRucReceptor] = useState(false);

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

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [selectedtipo_trans, setSelectedtipo_trans] = useState({
        checked: null
    });
    const [selecteddetr, setSelecteddetr] = useState({
        checked: null
    });
    const [selectedexp, setSelectedexp] = useState({
        checked: null
    });
    const [RUC, setRUC] = useState('');
    const [selectedant, setSelectedant] = useState({
        checked: null
    });
    const [selecteditn, setSelecteditn] = useState({
        checked: null
    });
    const [selectedest, setSelectedest] = useState({
        checked: null
    });
    const [selecteddir, setSelecteddir] = useState({
        checked: null
    });
    const [selectedcom, setSelectedcom] = useState({
        checked: null
    });
    const [selecteddesc_ant, setSelecteddesc_ant] = useState({
        checked: null
    });
    const [selectedisc, setSelectedisc] = useState({
        checked: null
    });
    const [selectedopg, setSelectedopg] = useState({
        checked: null
    });
    const [selectedcyt, setSelectedcyt] = useState({
        checked: null
    });

    const handleRadioChange1 = e => {
        setSelectedtipo_trans({
            checked: e.target.value
        });
    };

    const handleRadioChange2 = e => {
        setSelecteddetr({
            checked: e.target.value
        });
    };

    const handleRadioChange4 = e => {
        setSelectedant({
            checked: e.target.value
        });
    };

    const handleRadioChange5 = e => {
        setSelecteditn({
            checked: e.target.value
        });
    };

    const handleRadioChange6 = e => {
        setSelectedest({
            checked: e.target.value
        });
    };

    const handleRadioChange7 = e => {
        setSelecteddir({
            checked: e.target.value
        });
    };

    const handleRadioChange8 = e => {
        setSelectedcom({
            checked: e.target.value
        });
    };

    const handleRadioChange9 = e => {
        setSelecteddesc_ant({
            checked: e.target.value
        });
    };

    const handleRadioChange11 = e => {
        setSelectedopg({
            checked: e.target.value
        });
    };

    const handleRadioChange12 = e => {
        setSelectedcyt({
            checked: e.target.value
        });
    };

    const handleRUCChange = (event) => {
        const newValue = event.target.value;
        setRUC(newValue);
    };


    const onSubmit = handleSubmit(async (values) => {
        values.tipo_trans = selectedtipo_trans.checked;
        values.detr = selecteddetr.checked;
        values.exp = selectedexp.checked;
        values.ruc = RUC;
        values.ant = selectedant.checked;
        values.itn = selecteditn.checked;
        values.est = selectedest.checked;
        values.dir = selecteddir.checked;
        values.com = selectedcom.checked;
        values.desc_ant = selecteddesc_ant.checked;
        values.isc = selectedisc.checked;
        values.opg = selectedopg.checked;
        values.cyt = selectedcyt.checked;
        console.log(values);
        const data= await registrarFactura(values); 
        if(data.status===200){
            navigate('/factinf')
        }
    })



    const [selectedbos, setSelectedbos] = useState({
        checked: null
    });
    const [medida, setMedida] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [selectedbolsas, setSelectedbolsas] = useState({
        checked: null
    });
    const [valor, setValor] = useState('');
    const [descuento, setDescuento] = useState('');
    const [ISC, setISC] = useState('');
    const [ICBPER, setICBPER] = useState('');
    const [IGV, setIGV] = useState('');
    const [Importe_total, setImporte_total] = useState('');

    const handlersChange13 = (event) => {
        const newValue = event.target.value;
        setSelectedbos(newValue);
    };
    const handleMedidaChange = (event) => {
        const newValue = event.target.value;
        setMedida(newValue);
    };
    const handleCodigoChange = (event) => {
        const newValue = event.target.value;
        setCodigo(newValue);
    };
    const handleDescripcionChange = (event) => {
        const newValue = event.target.value;
        setDescripcion(newValue);
    };
    const handleRadioChange14 = e => {
        setSelectedbolsas({
            checked: e.target.value
        });
    };
    const handleValorChange = (event) => {
        const newValue = event.target.value;
        setValor(newValue);
    };
    const handleDescuentoChange = (event) => {
        const newValue = event.target.value;
        setDescuento(newValue);
    };
    const handleISCChange = (event) => {
        const newValue = event.target.value;
        setISC(newValue);
    };
    const handleICBPERChange = (event) => {
        const newValue = event.target.value;
        setICBPER(newValue);
    };
    const handleIGVChange = (event) => {
        const newValue = event.target.value;
        setIGV(newValue);
    };
    const handleImporte_totalChange = (event) => {
        const newValue = event.target.value;
        setImporte_total(newValue);
    };

    const onSubmit1 = handleSubmit(async(values1) => {
        values1.bos = selectedbos.checked;
        values1.cantidad=cantidad;
        values1.codigo=codigo;
        values1.descripcion=descripcion;
        values1.selectedbolsas=selectedbolsas.checked;
        values1.valor=valor;
        values1.descuento=descuento;
        values1.ISC=ISC;
        values1.ICBPER=ICBPER;
        values1.IGV=IGV;
        values1.Importe_total=Importe_total;

        console.log(values);
    })



    const handleOptionChange = (event) => {
        const isExportacion = event.target.value === "1";
        setMostrarRucReceptor(isExportacion);

        setSelectedexp({
            checked: event.target.value
        });
    };

    React.useEffect(() => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 2);
        const formattedDate = currentDate.toISOString().split('T')[0];
        document.getElementById('date_issue').setAttribute('min', formattedDate);
    });
    return (
        <div>
            <Starts className="stars-behind" />
            <div className="bg-primary min-h-screen flex items-center justify-center relative">

                <section id="div_fundamental" className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md relative">

                    <h1 className="text-2xl font-bold text-center text-yellow-100 mb-6">
                        Emisión de Factura Electronica
                    </h1>
                    <form onSubmit={onSubmit}>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique el Tipo de Transacción
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="tipo"
                                value="1"
                                className="mr-2"
                                checked={setSelectedtipo_trans.checked === '1'}
                                onChange={handleRadioChange1}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                Al contado
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="tipo"
                                value="0"
                                className="mr-2"
                                checked={setSelectedtipo_trans.checked === '0'}
                                onChange={handleRadioChange1}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                Al crédito
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si existen operaciones sujetas a Detracción
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="detraccion"
                                value="1"
                                className="mr-2"
                                checked={setSelecteddetr.checked === '1'}
                                onChange={handleRadioChange2}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="detraccion"
                                value="0"
                                className="mr-2"
                                checked={setSelecteddetr.checked === '0'}
                                onChange={handleRadioChange2}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si es una Factura de Exportación
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="exportacion"
                                value="1"
                                className="mr-2"
                                checked={setSelectedexp.checked === '1'}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="exportacion"
                                value="0"
                                className="mr-2"
                                checked={setSelectedexp.checked === '0'}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>
                        <div id="rucReceptor" style={{ display: mostrarRucReceptor ? 'none' : 'block' }} className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Consigne el RUC del Contribuyente Receptor de la Factura
                            </h1>
                            <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                RUC:
                            </label>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                aria-label="default input example"
                                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                onChange={handleRUCChange}
                            />
                            <label htmlFor="observation" className="text-gray-400 font-sans font-semibold">
                                Razon Social:
                            </label>
                            <input
                                id="impuesto"
                                className="monto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                                disabled
                            />
                        </div>


                        <div id="tipoDoc" style={{ display: mostrarRucReceptor ? 'block' : 'none' }} className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Seleccione el Tipo de documento de la Factura de Venta
                            </h1>
                            <h1 className="text-base font-bold text-gray-400 mb-3">
                                Tipo de Documento
                            </h1>
                            <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Tipo de Moneda"
                            >
                                <option selected="SIN">SIN DOCUMENTO</option>
                                <option value="REG">REG. ÚNICO DE CONTRIBUYENTES</option>
                                <option value="DOCT">DOC. TRIB. NO DOM. SIN RUC</option>
                                <option value="DOCI">DOC. IDENTIF PERS NAT NO DOM.</option>
                                <option value="TAX">TAX IDENTIFICATION NUMBER - TIN _ DOC TRIB PP.NN</option>
                                <option value="IDEN">IDENTIFICATION NUMBER - IN _ DOC TRIB PP.JJ</option>
                            </select>
                            <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                Consigne el Nombre o Razon Social del Receptor de la Factura:
                            </label>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                aria-label="default input example"
                                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"

                            />
                        </div>


                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura se emite por un Pago Anticipado
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="anticipado"
                                value="1"
                                className="mr-2"
                                checked={setSelectedant.checked === '1'}
                                onChange={handleRadioChange4}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="anticipado"
                                value="0"
                                className="mr-2"
                                checked={setSelectedant.checked === '0'}
                                onChange={handleRadioChange4}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura la emiite un Emisor Itinerante
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="itinerante"
                                value="1"
                                className="mr-2"
                                checked={setSelecteditn.checked === '1'}
                                onChange={handleRadioChange5}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="itinerante"
                                value="0"
                                className="mr-2"
                                checked={setSelecteditn.checked === '0'}
                                onChange={handleRadioChange5}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique el Establecimiento del Emisor es donde entregue el bien o prese el servicio
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="establecimiento"
                                value="1"
                                className="mr-2"
                                checked={setSelectedest.checked === '1'}
                                onChange={handleRadioChange6}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="establecimiento"
                                value="0"
                                className="mr-2"
                                checked={setSelectedest.checked === '0'}
                                onChange={handleRadioChange6}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Consigne la dirección donde entregue el bien o preste el servicio
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="direccion"
                                value="1"
                                className="mr-2"
                                checked={setSelecteddir.checked === '1'}
                                onChange={handleRadioChange7}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="direccion"
                                value="0"
                                className="mr-2"
                                checked={setSelecteddir.checked === '0'}
                                onChange={handleRadioChange7}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura se emite por venta de combustible y/o mantenimiento de un vehículo
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="combustible"
                                value="1"
                                className="mr-2"
                                checked={setSelectedcom.checked === '1'}
                                onChange={handleRadioChange8}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="combustible"
                                value="0"
                                className="mr-2"
                                checked={setSelectedcom.checked === '0'}
                                onChange={handleRadioChange8}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Indique el Tipo de Moneda de la Factura
                            </h1>
                            <h1 className="text-base font-bold text-gray-400 mb-3">
                                Tipo de Moneda
                            </h1>
                            <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Tipo de Moneda"
                                value="1"
                                {...register("tipo_mon")}
                            >
                                <option selected="SOLES">SOLES</option>
                                <option value="EURO">EURO</option>
                                <option value="DOLAR AMERICANO">DOLAR AMERICANO</option>
                                <option value="DOLAR CANADIENSE">DOLAR CANADIENSE</option>
                                <option value="LIBRA ESTERLINA">LIBRA ESTERLINA</option>
                                <option value="YEN">YEN</option>
                                <option value="CORONA SUECA">CORONA SUECA</option>
                                <option value="FRANCO SUIZO">FRANCO SUIZO</option>

                            </select>
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura tiene Descuentos o Deduce Anticipos
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="descuentos"
                                value="1"
                                className="mr-2"
                                checked={setSelecteddesc_ant.checked === '1'}
                                onChange={handleRadioChange9}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="descuentos"
                                value="0"
                                className="mr-2"
                                checked={setSelecteddesc_ant.checked === '0'}
                                onChange={handleRadioChange9}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div style={{ display: mostrarRucReceptor ? 'none' : 'block' }} className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura tiene ISC
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="isc"
                                value="1"
                                className="mr-2"
                                checked={setSelectedisc.checked === '1'}
                                onChange={handleIscChange}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="isc"
                                value="0"
                                className="mr-2"
                                checked={setSelectedisc.checked === '0'}
                                onChange={handleIscChange}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura tiene Operaciones Gratuitas
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="operacionesg"
                                value="1"
                                className="mr-2"
                                checked={setSelectedopg.checked === '1'}
                                onChange={handleRadioChange11}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="operacionesg"
                                value="0"
                                className="mr-2"
                                checked={setSelectedopg.checked === '0'}
                                onChange={handleRadioChange11}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Factura tiene Cargos y Otros Tributos que no forman parte de la base imponible del IGV
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="cargos"
                                value="1"
                                className="mr-2"
                                checked={setSelectedcyt.checked === '1'}
                                onChange={handleRadioChange12}
                            />
                            <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                SI
                            </label>
                            <br />
                            <div className="h-1"></div>
                            <input
                                type="radio"
                                id="retention_no"
                                name="cargos"
                                value="0"
                                className="mr-2"
                                checked={setSelectedcyt.checked === '0'}
                                onChange={handleRadioChange12}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>



                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">

                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Pre - Elaboración de la Factura Electrónica
                            </h1>
                            <label htmlFor="num_doc" className="text-gray-400 font-sans font-bold">
                                Número de documento:
                            </label>
                            <input
                                disabled
                                id="pendiente"
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="razon_s" className="text-gray-400 font-sans font-bold">
                                Razón Social:
                            </label>
                            <input
                                disabled
                                id="pendiente"
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="direccion_c" className="text-gray-400 font-sans font-bold">
                                Dirección del Cliente:
                            </label>
                            <input
                                disabled
                                id="pendiente"
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="tipo_m" className="text-gray-400 font-sans font-bold">
                                Tipo de Moneda
                            </label>
                            <input
                                disabled
                                id="pendiente"
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="date_issue" className="text-gray-400 font-sans font-semibold">
                                Fecha de Emisión:
                            </label>
                            <input
                                type="date"
                                id="date_issue"
                                name="date_issue"
                                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                {...register("fecha_emision", { required: true })}
                            />

                            <div className="h-4"></div>
                            <div className="bg-zinc-800 p-4 rounded-lg mb-4" onSubmit={onSubmit1}>

                                <h1 className="text-base font-bold mb-3 text-white">
                                    Agregue los bienes o servicios:
                                </h1>
                                <div id="BoS" className="flex justify-center">
                                    <div className="mx-7">
                                        <input
                                            type="radio"
                                            id="retention_yes"
                                            name="item"
                                            value="1"
                                            className="mr-2"
                                            checked={setSelectedbos.checked === '1'}
                                            onChange={handlersChange13}
                                        />
                                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                            Bien
                                        </label>
                                        <br />
                                    </div>

                                    <div className="h-1"></div>
                                    <div className="mx-7">
                                        <input
                                            type="radio"
                                            id="retention_no"
                                            name="item"
                                            value="0"
                                            className="mr-2"
                                            checked={setSelectedbos.checked === '0'}
                                            onChange={handlersChange13}
                                        />
                                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                            Servicio
                                        </label>
                                        <br />
                                    </div>
                                </div>

                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Cantidad:
                                </label>
                                <input

                                    className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="cant"
                                    aria-label=".form-control-lg example"
                                    onChange={handle}
                                />

                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Unidad de Medida:
                                </label>
                                <input
                                    className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="text"
                                    id="medida"
                                    aria-label=".form-control-lg example"
                                    onChange={handleMedidaChange}
                                />

                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Código:
                                </label>
                                <input
                                    className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="text"
                                    id="cod"
                                    aria-label=".form-control-lg example"
                                    onChange={handleCodigoChange}
                                />

                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Descripción:
                                </label>
                                <textarea className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="text"
                                    id="des"
                                    aria-label=".form-control-lg example">
                                    onChange={handleDescripcionChange}
                                </textarea>

                                <h1 className="mb-3 text-gray-400 font-sans font-bold">
                                    Impuesto Bolsas Plásticas:
                                </h1>
                                <div id="ImpBols" className="flex justify-center">
                                    <div className="mx-7">
                                        <input
                                            type="radio"
                                            id="siImpuestoBolsas"
                                            name="impuestobolsas"
                                            value="1"
                                            className="mr-2"
                                            onChange={handleImpBolsChange}
                                            checked={selectedImpBols === "1"}
                                        />
                                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                            SI
                                        </label>
                                        <br />
                                    </div>

                                    <div className="mx-7">
                                        <div className="h-1"></div>
                                        <input
                                            type="radio"
                                            id="noImpuestoBolsas"
                                            name="impuestobolsas"
                                            value="0"
                                            className="mr-2"
                                            onChange={handleImpBolsChange}
                                            checked={selectedImpBols === "0"}
                                        />
                                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                            NO
                                        </label>
                                        <br />
                                    </div>
                                </div>

                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Valor Unitario:
                                </label>
                                <input

                                    className="monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="uni"
                                    placeholder="0.00"
                                    aria-label=".form-control-lg example"
                                    onChange={onChangeMonto}
                                />

                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Descuento:
                                </label>
                                <input
                                    disabled
                                    className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="monto_cuota"
                                    placeholder="0.00"
                                    aria-label=".form-control-lg example"
                                    onChange={handleDescuentoChange}
                                />
                                <div style={{ display: mostrarIsc ? mostrarRucReceptor ? 'none' : 'block' : 'none' }}>
                                    <h1 className="text-gray-400 font-sans font-bold">
                                        ISC:
                                    </h1>
                                    <select
                                        value={tipoIsc}
                                        onChange={handleTipoIscChange}
                                        className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                        aria-label="ISC"
                                    >
                                        <option selected="valor">Al valor</option>
                                        <option value="monto">Monto Fijo</option>
                                    </select>
                                    <div className='flex'>
                                        <input
                                            id="valorISC"
                                            className="monto-cuota w-1/6 py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                            type="number"
                                            placeholder="0"
                                            aria-label=".form-control-lg example"
                                            onChange={onChangeValorIsc}
                                        />
                                        <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold text-lg ml-2 mr-6 mt-2">
                                            <div style={{ display: tipoIsc === 'monto' ? 'none' : 'block' }}>%</div>
                                        </label>

                                        <input
                                            disabled
                                            className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                            type="number"
                                            id="valorParcialIsc"
                                            placeholder="0.00"
                                            aria-label=".form-control-lg example"
                                            onChange={handleISCChange}
                                        />
                                    </div>
                                </div>
                                <h1 className="mb-3 text-gray-400 font-sans font-bold">
                                    IGV (18%):
                                </h1>
                                <div className="flex justify-center">
                                    <div className="mx-7">
                                        <input
                                            type="radio"
                                            id="retention_yes"
                                            name="igvtipo"
                                            value="2"
                                            className="mr-2"
                                            onChange={handleIgvTipoChange}
                                        />
                                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                            Gravado
                                        </label>
                                        <br />
                                    </div>

                                    <div className="mx-7">
                                        <div className="h-1"></div>
                                        <input
                                            type="radio"
                                            id="retention_no"
                                            name="igvtipo"
                                            value="0"
                                            className="mr-2"
                                            onChange={handleIgvTipoChange}
                                        />
                                        <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                            Exonerado
                                        </label>
                                        <br />
                                    </div>

                                    <div className="mx-7">
                                        <input
                                            type="radio"
                                            id="retention_yes"
                                            name="igvtipo"
                                            value="1"
                                            className="mr-2"
                                            onChange={handleIgvTipoChange}
                                        />
                                        <label htmlFor="retention_yes" className="text-gray-400 font-sans font-semibold">
                                            Inafecto
                                        </label>
                                        <br />
                                    </div>
                                </div>
                                <input
                                    disabled
                                    className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="igvParcial"
                                    placeholder="0.00"
                                    aria-label=".form-control-lg example"
                                    value={mfinal}
                                    onChange={handleIGVChange}
                                />
                                <div style={{ display: selectedImpBols === '0' ? 'none' : 'block' }}>
                                    <h1 className="text-gray-400 font-sans font-bold">
                                        ICBPER:
                                    </h1>
                                    <div className='flex'>

                                        <select
                                            disabled={selectedImpBols !== "1"}
                                            value={selectedYear}
                                            onChange={(e) => {
                                                setSelectedYear(e.target.value);
                                                handleYearChange(e);
                                            }}
                                            className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 mr-3 font-sans font-semibold text-gray-300 focus-border-yellow-100"
                                            aria-label="ISC"
                                        >
                                            <option value="nada">-</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                        </select>



                                        <input
                                            disabled
                                            className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 ml-3 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                            type="text"
                                            id="imp_Bols"
                                            placeholder="0.00"
                                            aria-label=".form-control-lg example"
                                        />
                                    </div>

                                    <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                        Impuesto ICBPER:
                                    </label>
                                    <input
                                        disabled
                                        className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                        type="number"
                                        id="bols_tot"
                                        placeholder="0.00"
                                        aria-label=".form-control-lg example"
                                        onChange={handleICBPERChange}
                                    />
                                </div>
                                <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                    Importe Total del Item:
                                </label>
                                <input
                                    disabled
                                    value={iTotal}
                                    className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                    type="number"
                                    id="monto_Total"
                                    placeholder="0.00"
                                    aria-label=".form-control-lg example"
                                    onChange={handleImporte_totalChange}
                                />

                                <div className="h-1"></div>
                                <div className="flex justify-end">
                                    <input
                                        id="agregar"
                                        type="button"
                                        value="Adicionar Item"
                                        className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                                        onClick={insertarFila}
                                    />
                                </div>
                            </div>
                            <div className="mx-auto bg-text-zinc-900 dark:text-white">
                                <table id="bienesServicios" className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md overflow-hidden">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border bg-gray-500 text-gray-300">Eliminar</th>
                                            <th className="border bg-zinc-500 text-gray-300">Cantidad</th>
                                            <th className="border bg-zinc-500 text-gray-300">Unidad de medida</th>
                                            <th className="border bg-zinc-500 text-gray-300">Código</th>
                                            <th className="border bg-zinc-500 text-gray-300">Descripción</th>
                                            <th className="border bg-zinc-500 text-gray-300">Valor unitario</th>
                                            <th className="border bg-zinc-500 text-gray-300">ICBPER</th>
                                            <th style={{ display: 'none' }} className="border bg-zinc-500 text-gray-300">ImporteTotal(c/u)</th>
                                            <th style={{ display: 'none' }} className="border bg-zinc-500 text-gray-300">ISC(c/u)</th>
                                            <th style={{ display: 'none' }} className="border bg-zinc-500 text-gray-300">IGV(c/u)</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cuerpo_cuotas" className="font-sans font-semibold border border-gray-400 text-gray-200 text-center">
                                        <tr>
                                            <td className="bg-zinc-600" >Importe total</td>
                                            <td></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td className="bg-zinc-600" id="tb_importeTotal"  {...register("total")}>0</td>
                                            <td style={{ display: 'none' }} ></td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td className="bg-zinc-600" >ISC</td>
                                            <td></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td className="bg-zinc-600" id="tb_isc" {...register("total_isc")}>0</td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td className="bg-zinc-600" >IGV</td>
                                            <td></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td className="bg-zinc-600" id="tb_igv" {...register("total_igv")}>0</td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td className="bg-zinc-600" >ICBPER</td>
                                            <td></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td id="tb_icbper" className="bg-zinc-600" {...register("total_icbper")}>0</td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
        </div >
    );
}

export default FacturaForm;