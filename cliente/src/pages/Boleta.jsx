import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Starts from '../components/Stars'
import { useLogin } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom';
import { useReciboxH } from '../context/ReciboxHContext';

function BoletaForm() {
    const [mostrarRucReceptor, setMostrarRucReceptor] = useState(false);
    const { saveDataUser } = useReciboxH()
    const [selectedDoc, setSelectedDoc] = useState("SIN DOCUMENTO");
    const { registrarBoleta, errors: LoginErrors } = useLogin();
    const { registrarPBoleta, errors: LoginErrors2 } = useLogin();
    const navigate = useNavigate();
    function insertarFila() {
        /*const fechaVencimiento = document.getElementById('fecha_vencimiento').value;
        const montoCuota = document.getElementById('monto_cuota').value;*/


        let tblDatos = document.getElementById('bienesServicios');
        let newRow = tblDatos.insertRow(tblDatos.rows.length - 6);

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
        let col11 = newRow.insertCell(10);
        let col12 = newRow.insertCell(11);


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
        col11.innerHTML = document.getElementById('cant').value * document.getElementById('uni').value;
        col12.innerHTML = document.getElementById('monto_descuento').value;
        newRow.setAttribute('data-id', id);
        col8.style.display = 'none';
        col9.style.display = 'none';
        col10.style.display = 'none';
        col11.style.display = 'none';
        col12.style.display = 'none';

        col1.firstChild.addEventListener('click', function () {
            eliminarFila(id);
        });

        a++;

        var table = document.getElementById('bienesServicios');

        var rows = table.getElementsByTagName('tr');

        var sumaImporte = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[7];
            if (cell) {
                sumaImporte += parseFloat(cell.textContent || cell.innerText);
            }
        }

        var sumaDescuento = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[11];
            if (cell) {
                sumaDescuento += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_descuento').textContent = sumaDescuento.toFixed(2);
        var sumaImporteBeta = sumaImporte.toFixed(2)

        document.getElementById('tb_importeTotal').textContent = sumaImporteBeta;

        var sumaISC = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[8];
            if (cell) {
                sumaISC += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_isc').textContent = sumaISC.toFixed(2);

        var sumaIGV = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[9];
            if (cell) {
                sumaIGV += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_igv').textContent = sumaIGV.toFixed(2);

        var sumaICBPER = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[6];
            if (cell) {
                sumaICBPER += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_icbper').textContent = sumaICBPER.toFixed(2);

        var sumaSubtotal = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[10];
            if (cell) {
                sumaSubtotal += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_subtotal').textContent = sumaSubtotal.toFixed(2);

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

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[7];
            if (cell) {
                sumaImporte += parseFloat(cell.textContent || cell.innerText);
            }
        }

        var sumaDescuento = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[11];
            if (cell) {
                sumaDescuento += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_descuento').textContent = sumaDescuento.toFixed(2);
        var sumaImporteBeta = sumaImporte.toFixed(2)
        console.log("holaaaa")
        console.log(sumaImporteBeta)
        document.getElementById('tb_importeTotal').textContent = sumaImporteBeta;


        var sumaISC = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[8];
            if (cell) {
                sumaISC += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_isc').textContent = sumaISC.toFixed(2);

        var sumaIGV = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[9];
            if (cell) {
                sumaIGV += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_igv').textContent = sumaIGV.toFixed(2);

        var sumaICBPER = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[6];
            if (cell) {
                sumaICBPER += parseFloat(cell.textContent || cell.innerText);
            }
        }

        var sumaSubtotal = 0;

        for (var i = 1; i < rows.length - 6; i++) {
            var cell = rows[i].getElementsByTagName('td')[10];
            if (cell) {
                sumaSubtotal += parseFloat(cell.textContent || cell.innerText);
            }
        }

        document.getElementById('tb_subtotal').textContent = sumaSubtotal.toFixed(2);

        document.getElementById('tb_icbper').textContent = sumaICBPER.toFixed(2);
    }

    const handleOptionChange = (e) => {
        setMostrarIsc(false);
        document.getElementById('valorISC').value = 0;

        let selectedValue = e.target.value;
        setMostrarRucReceptor(selectedValue === "1");
        updateMFinal(cantidad, valorUnitario);
    };

    const handleDocChange = (e) => {
        let selectedValue = e.target.value;
        document.getElementById('description').value = '';
        console.log("cesar");
        console.log(selectedValue);
        setSelectedDoc(selectedValue);

        const newValue = e.target.value;
        setTd(newValue);
    };

    const [monedaSeleccionada, setMonedaSeleccionada] = useState('SOLES');

    let a = 1;


    const [igvNeto, setigvNeto] = useState('');
    const [valorUnitario, setValorUnitario] = useState(0);
    const [mfinal, setMFinal] = useState(0);
    const [iTotal, setITotal] = useState(0);
    const [selectedValue, setSelectedValue] = useState("1");
    const [selectedIgvTipo, setSelectedIgvTipo] = useState("2");
    const [selectedImpBols, setSelectedImpBols] = useState("0");
    const [selectedYear, setSelectedYear] = useState("nada");
    const [mostrarIsc, setMostrarIsc] = useState(false);
    const [tipoIsc, setTipoIsc] = useState("valor");
    const [valorISC, setValorIsc] = useState(0);
    const [tm, setTipoMoneda] = useState("SOLES");

    const handleMonedaChange = (e) => {
        console.log("hola");
        let selectedValue = e.target.value;
        setTipoMoneda(selectedValue);
        document.getElementById('tipoMonedaInferior').value = selectedValue;
    };

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
            document.getElementById('imp_Bols').value = yearToValueMap["nada"];
            setSelectedYear("nada");
        }
        updateMFinal(cantidad, valorUnitario);
    };

    const handle = (event) => {
        const newValue = event.target.value;
        setCantidad(newValue);
        updateMFinal(newValue, valorUnitario);
    };

    const onChangeValorIsc = (e) => {
        let value = e.target.value;
        setValorIsc(value);
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

        document.getElementById('igvParcial').value = res.toFixed(2);

        const valorIsc1 = parseFloat(document.getElementById('valorParcialIsc').value);
        const total_bolsas = document.getElementById('imp_Bols').value * newCantidad;
        document.getElementById('bols_tot').value = total_bolsas.toFixed(2);

        const resRedondeado = res.toFixed(2);
        const i = valorIsc1 + res + newValorUnitario * newCantidad;

        // Convert impTotalFinal to a number (remove .toFixed)
        const impTotalFinal = parseFloat(i) + parseFloat(total_bolsas);

        const descuento = document.getElementById('monto_descuento').value;
        const importeFinalDescuento = impTotalFinal - descuento

        // Now, impTotalFinal is a number, and you can use it for calculations or display.
        setITotal(importeFinalDescuento.toFixed(2));
        setMFinal(resRedondeado);
    };

    const verificarDNI = async (dni) => {
        const apiUrl = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNhamFmaTg1NTRAbmV3Y3Vwb24uY29tIn0.M1U5qOoJfWNeOU9A_4-QadWdWoTSHA_Nuvd32Um1kkY`;
        const response = await fetch(apiUrl);
        return await response.json();
    };

    const consultaDNI = async () => {
        const dniPattern = /^\d{8}$/;
        const dni = document.getElementById('description').value;

        if (!dniPattern.test(dni)) {
            showAlertDanger('El DNI debe tener exactamente 8 números.');
            return;
        }

        try {
            const datosDNI = await verificarDNI(dni);

            if (datosDNI.success === true) {
                console.log('DNI válido, redirigiendo...');
                console.log('bien hecho');
                console.log(datosDNI.nombres + " " + datosDNI.apellidoPaterno + " " + datosDNI.apellidoMaterno);
                document.getElementById('NombreRazon').value = datosDNI.nombres + " " + datosDNI.apellidoPaterno + " " + datosDNI.apellidoMaterno;
                document.getElementById('nombreClienteInferior').value = datosDNI.nombres + " " + datosDNI.apellidoPaterno + " " + datosDNI.apellidoMaterno;
                if (data.status === 200) {
                    console.log(datosDNI.nombres + " " + datosDNI.apellidoPaterno + " " + datosDNI.apellidoMaterno);
                    document.getElementById('NombreRazon').value = datosDNI.nombres + " " + datosDNI.apellidoPaterno + " " + datosDNI.apellidoMaterno;
                    document.getElementById('nombreClienteInferior').value = datosDNI.nombres + " " + datosDNI.apellidoPaterno + " " + datosDNI.apellidoMaterno;
                }
            } else {
                console.log('El DNI proporcionado no es válido.');
            }
        } catch (error) {
            console.log('Error al conectar con la API o el servidor.');
        }

    };

    React.useEffect(() => {

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 2);
        const formattedDate = currentDate.toISOString().split('T')[0];
        document.getElementById('fechaEmision').setAttribute('min', formattedDate);

        const currentDate1 = new Date();
        const formattedDate1 = currentDate1.toISOString().split('T')[0];
        document.getElementById('fechaVencimiento').setAttribute('min', formattedDate1);


    });

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [selectedexpo, setSelectedexpo] = useState({
        checked: null
    });
    const [rs, setrs] = useState('');
    const [td, setTd] = useState('');
    const [selectedpa, setSelectedpa] = useState({
        checked: null
    });
    const [selecteditin, setSelecteditin] = useState({
        checked: null
    });
    const [selectedesta, setSelectedesta] = useState({
        checked: null
    });
    const [selecteddirec, setSelecteddirec] = useState({
        checked: null
    });
    const [selectedda, setSelectedda] = useState({
        checked: null
    });
    const [selectedISC_sel, setSelectedISC_sel] = useState({
        checked: null
    });
    const [selectedog, setSelectedog] = useState({
        checked: null
    });
    const [selectedcyot, setSelectedcyot] = useState({
        checked: null
    });
    const [nombre, setNombre] = useState('');
    const [numero_documento, setNumero_documento] = useState('');

    const handleRadioChange1 = e => {
        setMostrarIsc(false);
        document.getElementById('valorISC').value = 0;

        const selectedValue = e.target.value;
        setMostrarRucReceptor(selectedValue === "1");
        updateMFinal(cantidad, valorUnitario);

        setSelectedexpo({
            checked: e.target.value
        });
    };

    const handlersChange = (event) => {
        let newValue = event.target.value;
        document.getElementById('nombreClienteInferior').value = newValue;
        setrs(newValue);
        setNombre(newValue);
    };

    const handleRadioChange2 = e => {
        setSelectedpa({
            checked: e.target.value
        });
    };

    const handleRadioChange3 = e => {
        setSelecteditin({
            checked: e.target.value
        });
    };

    const handleRadioChange4 = e => {
        setSelectedesta({
            checked: e.target.value
        });
    };

    const handleRadioChange5 = e => {
        setSelecteddirec({
            checked: e.target.value
        });
    };
    const [mostrarAnticipos, setMostrarAnticipos] = useState(false);

    const handleRadioChange6 = e => {
        const isExportacion = e.target.value === "1";
        setMostrarAnticipos(isExportacion)
        document.getElementById("monto_descuento").value = 0;
        setSelectedda({
            checked: e.target.value
        });
    };

    const handleRadioChange7 = e => {
        const isISC = e.target.value === "1";
        document.getElementById('valorISC').value = 0;
        setMostrarIsc(isISC);
        updateMFinal(cantidad, valorUnitario);

        setSelectedISC_sel({
            checked: e.target.value
        });
    };

    const handleRadioChange8 = e => {
        setSelectedog({
            checked: e.target.value
        });
    };

    const handleRadioChange9 = e => {
        setSelectedcyot({
            checked: e.target.value
        });
    };


    const handleNumero_documentoChange = (event) => {
        const newValue = event.target.value;
        setNumero_documento(newValue);
    };

    const onSubmit = handleSubmit(async (values, vaBienesServicios) => {
        values.expo = selectedexpo.checked;
        values.rs = document.getElementById('nombreClienteInferior').value;
        values.nombre = document.getElementById('nombreClienteInferior').value;
        values.td = td;
        values.pa = selectedpa.checked;
        values.itin = selecteditin.checked;
        values.esta = selectedesta.checked;
        values.direc = selecteddirec.checked;
        values.da = selectedda.checked;
        values.ISC_sel = selectedISC_sel.checked;
        values.og = selectedog;
        values.cyot = selectedcyot;
        values.numero_documento = numero_documento;
        values.tm = tm;
        var table = document.getElementById('bienesServicios');
        var rows = table.getElementsByTagName('tr');

        for (var i = 1; i < rows.length - 6; i++) {
            vaBienesServicios.cantidad = rows[i].getElementsByTagName('td')[1].textContent;
            vaBienesServicios.unidad = rows[i].getElementsByTagName('td')[2].textContent;
            vaBienesServicios.codigo = rows[i].getElementsByTagName('td')[3].textContent;
            vaBienesServicios.descripcion = rows[i].getElementsByTagName('td')[4].textContent;
            vaBienesServicios.valor = rows[i].getElementsByTagName('td')[5].textContent;
            vaBienesServicios.icbper = rows[i].getElementsByTagName('td')[6].textContent;
            vaBienesServicios.importeTotal = rows[i].getElementsByTagName('td')[7].textContent;
            vaBienesServicios.isc = rows[i].getElementsByTagName('td')[8].textContent;
            vaBienesServicios.igv = rows[i].getElementsByTagName('td')[9].textContent;
            vaBienesServicios.descuento = rows[i].getElementsByTagName('td')[11].textContent;
            const dataCuota = {
                cantidad: vaBienesServicios.cantidad,
                unidad: vaBienesServicios.unidad,
                medida: vaBienesServicios.unidad,
                codigo: vaBienesServicios.codigo,
                descripcion: vaBienesServicios.descripcion,
                valor: vaBienesServicios.valor,
                ISC: vaBienesServicios.isc,
                ICBPER: vaBienesServicios.icbper,
                IGV: vaBienesServicios.igv,
                Importe_total: vaBienesServicios.importeTotal,
                descuento: vaBienesServicios.descuento,
            }

            console.log(dataCuota)
            console.log(values)
            await registrarPBoleta(dataCuota);
        }

        values.total = document.getElementById('tb_importeTotal').textContent;
        values.total_isc = document.getElementById('tb_isc').textContent;
        values.total_igv = document.getElementById('tb_igv').textContent;
        values.total_icbper = document.getElementById('tb_icbper').textContent;
        values.sub_total = document.getElementById('tb_subtotal').textContent;

        console.log(values);
        await registrarBoleta(values);
        const id_login = JSON.parse(localStorage.getItem('loggindata'))
        saveDataUser(id_login)

        navigate('/prebol')
    })

    const [selectedbos, setSelectedbos] = useState({
        checked: null
    });
    const [cantidad, setCantidad] = useState('');
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

    const handlersChange10 = (event) => {
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
    const handleRadioChange11 = e => {
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
        updateMFinal(cantidad, valorUnitario);
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

    const onSubmit1 = () => {
        navigate('/menu')
    }

    return (
        <div>
            <Starts className="stars-behind" />
            <div className="bg-primary min-h-screen flex items-center justify-center relative">

                <section id="div_fundamental" className="bg-zinc-800 rounded-lg shadow-md p-8 w-full max-w-screen-md relative">

                    <h1 className="text-2xl font-bold text-center text-yellow-100 mb-6">
                        Emisión de Boleta de Venta Electronica
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si es una Boleta de Venta de Exportación
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="exportacion"
                                value="1"
                                className="mr-2"
                                //checked={setSelectedexpo.checked === '1'}
                                onChange={handleRadioChange1}
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
                                //checked={setSelectedexpo.checked === '0'}
                                onChange={handleRadioChange1}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Seleccione el Tipo de documento y número de documento del Cliente, Adquirente o Usuario, de la Boleta de Venta
                            </h1>
                            <h1 className="text-base font-bold text-gray-400 mb-3">
                                Tipo de Documento
                            </h1>
                            <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus-border-yellow-100"
                                aria-label="Tipo de Moneda"
                                id="tipoDocumentoOpciones"
                                //value={selectedDoc}
                                onChange={handleDocChange}
                            >
                                <option selected="SIN DOCUMENTO">SIN DOCUMENTO</option>
                                <option value="DOC. TRIB. NO DOM. SIN RUC">DOC. TRIB. NO DOM. SIN RUC</option>
                                <option value="DOC. NACIONAL DE IDENTIDAD">DOC. NACIONAL DE IDENTIDAD</option>
                                <option value="CARNÉ IDENTIDAD-RR EXTERIORES">CARNÉ IDENTIDAD-RR EXTERIORES</option>
                                <option value="CARNÉ PERM.TEMP.PERMANENCIA">CARNÉ PERM.TEMP.PERMANENCIA</option>
                                <option value="DOC. DE IDENTIDAD EXTRANJERO">DOC. DE IDENTIDAD EXTRANJERO</option>
                                <option value="OTROS DOC VIAJE">OTROS DOC VIAJE</option>
                                <option value="CARNÉ DE EXTRANJERÍA">CARNÉ DE EXTRANJERÍA</option>
                                <option value="REG. ÚNICO DE CONTRIBUYENTES">REG. ÚNICO DE CONTRIBUYENTES</option>
                                <option value="PASAPORTE">PASAPORTE</option>
                                <option value="CARNE DE IDENTIDAD">CARNE DE IDENTIDAD</option>
                                <option value="DOC. IDENTIF PERS NAT NO DOM.">DOC. IDENTIF PERS NAT NO DOM.</option>
                                <option value="TAX IDENTIFICATION NUMBER - TIN _ DOC TRIB PP.NN">TAX IDENTIFICATION NUMBER - TIN _ DOC TRIB PP.NN</option>
                                <option value="IDENTIFICATION NUMBER - IN _ DOC TRIB PP.JJ">IDENTIFICATION NUMBER - IN _ DOC TRIB PP.JJ</option>
                                <option value="CARNE PERMISO TEMP.PERMANENCIA">CARNE PERMISO TEMP.PERMANENCIA</option>
                            </select>
                            <div id="numDocumento" style={{ display: selectedDoc === 'SIN DOCUMENTO' ? 'none' : 'block' }}>
                                <label htmlFor="description" className="text-gray-400 font-sans font-semibold">
                                    Consigne el Número del Documento del Cliente
                                </label>
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    aria-label="default input example"
                                    className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus-border-yellow-100"
                                    onChange={handleNumero_documentoChange}
                                />
                            </div>
                            <label htmlFor="NombreRazon" className="text-gray-400 font-sans font-semibold">
                                Consigne Apellidos y Nombres del Cliente, o Denominación o Razón Social cuando corresponda:
                            </label>
                            <input
                                id="NombreRazon"
                                name="NombreRazon"
                                type="text"
                                aria-label="default input example"
                                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                onChange={handlersChange}
                                disabled={selectedDoc == 'DOC. NACIONAL DE IDENTIDAD'}
                            />
                            <div className="flex justify-end" style={{ display: selectedDoc === "DOC. NACIONAL DE IDENTIDAD" ? 'block' : 'none' }}>
                                <input
                                    id="agregar"
                                    type="button"
                                    value="Ingresar"
                                    className="bg-yellow-100 font-sans font-semibold text-zinc-900 py-2 px-4 rounded-md mb-2 hover:bg-yellow-200 hover:font-bold hover:px-6"
                                    onClick={consultaDNI}
                                />
                            </div>
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Boleta de Venta se emite por un Pago Anticipado
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="anticipado"
                                value="1"
                                className="mr-2"
                                //checked={setSelectedpa.checked === '1'}
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
                                name="anticipado"
                                value="0"
                                className="mr-2"
                                //checked={setSelectedpa.checked === '0'}
                                onChange={handleRadioChange2}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si consignará el establecimiento del emisor o Identifique si la venta es por Emisor Itinerante
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="itinerante"
                                value="1"
                                className="mr-2"
                                //checked={setSelecteditin.checked === '1'}
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
                                name="itinerante"
                                value="0"
                                className="mr-2"
                                //={setSelecteditin.checked === '0'}
                                onChange={handleRadioChange3}
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
                                //checked={setSelectedesta.checked === '1'}
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
                                name="establecimiento"
                                value="0"
                                className="mr-2"
                                //checked={setSelectedesta.checked === '0'}
                                onChange={handleRadioChange4}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div style={{ display: mostrarRucReceptor ? 'none' : 'block' }} className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si consignará la dirección donde entregue el bien o preste el servicio
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="direccion"
                                value="1"
                                className="mr-2"
                                //checked={setSelecteddirec.checked === '1'}
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
                                name="direccion"
                                value="0"
                                className="mr-2"
                                //checked={setSelecteddirec.checked === '0'}
                                onChange={handleRadioChange5}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Indique el Tipo de Moneda de la Boleta de Venta
                            </h1>
                            <h1 className="text-base font-bold text-gray-400 mb-3">
                                Tipo de Moneda
                            </h1>
                            <select
                                className="form-select w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                aria-label="Tipo de Moneda"
                                id="tipoMonedaSelect"
                                onChange={handleMonedaChange}
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
                                Indique si la Boleta de Venta tiene Descuentos o Deduce Anticipos
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="descuentos"
                                value="1"
                                className="mr-2"
                                //checked={setSelectedda.checked === '1'}
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
                                name="descuentos"
                                value="0"
                                className="mr-2"
                                //checked={setSelectedda.checked === '0'}
                                onChange={handleRadioChange6}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div style={{ display: mostrarRucReceptor ? 'none' : 'block' }} className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Boleta de Venta tiene ISC
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="isc"
                                value="1"
                                className="mr-2"
                                //checked={setSelectedISC_sel.checked === '1'}
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
                                name="isc"
                                value="0"
                                className="mr-2"
                                //checked={setSelectedISC_sel.checked === '0'}
                                onChange={handleRadioChange7}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Boleta de Venta tiene Operaciones Gratuitas
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="operacionesg"
                                value="1"
                                className="mr-2"
                                //checked={setSelectedog.checked === '1'}
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
                                name="operacionesg"
                                value="0"
                                className="mr-2"
                                //checked={setSelectedog.checked === '0'}
                                onChange={handleRadioChange8}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div style={{ display: mostrarRucReceptor ? 'none' : 'block' }} className="bg-zinc-900 p-4 rounded-lg mb-4">
                            <h1 className="text-lg font-semibold text-yellow-100 mb-5">
                                Indique si la Boleta de Venta tiene Cargos y Otros Tributos que no forman parte de la base imponible del IGV
                            </h1>
                            <input
                                type="radio"
                                id="retention_yes"
                                name="cargos"
                                value="1"
                                className="mr-2"
                                //checked={setSelectedcyot.checked === '1'}
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
                                name="cargos"
                                value="0"
                                className="mr-2"
                                //checked={setSelectedcyot.checked === '0'}
                                onChange={handleRadioChange9}
                            />
                            <label htmlFor="retention_no" className="text-gray-400 font-sans font-semibold">
                                NO
                            </label>
                            <br />
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg mb-4">

                            <h1 className="text-lg font-semibold text-yellow-100 mb-4">
                                Pre - Elaboración de la Boleta de la Venta
                            </h1>
                            <label htmlFor="num_doc" className="text-gray-400 font-sans font-bold">
                                Nombre del Cliente:
                            </label>
                            <input
                                disabled
                                id="nombreClienteInferior"
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                            />

                            <label htmlFor="tipo_m" className="text-gray-400 font-sans font-bold">
                                Tipo de Moneda
                            </label>
                            <input
                                disabled
                                id="tipoMonedaInferior"
                                className="monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                type="text"
                                aria-label=".form-control-lg example"
                                value={tm}
                            />

                            <label htmlFor="date_issue" className="text-gray-400 font-sans font-semibold">
                                Fecha de Emisión:
                            </label>
                            <input
                                id="fechaEmision"
                                type="date"
                                name="date_issue"
                                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                {...register("fecha_emision")}
                            />

                            <label htmlFor="date_issue" className="text-gray-400 font-sans font-semibold">
                                Fecha de Vencimiento:
                            </label>
                            <input
                                type="date"
                                id="fechaVencimiento"
                                name="date_issue"
                                className="w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"
                                {...register("fecha_vencimiento")}
                            />

                            <div className="h-4"></div>
                            <div className="bg-zinc-800 p-4 rounded-lg mb-4">

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
                                            //checked={setSelectedbos.checked === '1'}
                                            onChange={handlersChange10}
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
                                            //checked={setSelectedbos.checked === '0'}
                                            onChange={handlersChange10}
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
                                    aria-label=".form-control-lg example"
                                    onChange={handleDescripcionChange}
                                >
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
                                        //checked={selectedImpBols === "1"}
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
                                        //checked={selectedImpBols === "0"}
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
                                <div style={{ display: mostrarAnticipos ? 'block' : 'none' }}>
                                    <label htmlFor="monto_cuota" className="text-gray-400 font-sans font-bold">
                                        Descuento:
                                    </label>
                                    <input
                                        disabled={mostrarAnticipos == '0'}
                                        className={mostrarAnticipos == '0' ? "monto-neto w-full py-2 px-3 border border-gray-800 bg-gray-800 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100" : "monto-cuota w-full py-2 px-3 border border-gray-900 bg-gray-900 rounded-md mb-2 font-sans font-semibold text-gray-300 focus:border-yellow-100"}
                                        type="number"
                                        id="monto_descuento"
                                        placeholder="0.00"
                                        aria-label=".form-control-lg example"
                                        onChange={handleDescuentoChange}
                                    />
                                </div>
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
                                            <th style={{ display: 'none' }} className="border bg-zinc-500 text-gray-300">Subtotal</th>
                                            <th style={{ display: 'none' }} className="border bg-zinc-500 text-gray-300">descuentoUnidad</th>
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
                                            <td className="bg-zinc-600" id="tb_importeTotal" {...register("total")}>0</td>
                                            <td style={{ display: 'none' }} ></td>
                                            <td style={{ display: 'none' }}></td>
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
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td className="bg-zinc-600" >Subtotal</td>
                                            <td></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td id="tb_subtotal" className="bg-zinc-600" >0</td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                            <td style={{ display: 'none' }}></td>
                                        </tr>
                                        <tr>
                                            <td className="bg-zinc-600" >Descuento</td>
                                            <td></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td className="bg-zinc-600" id="tb_descuento" >0</td>
                                            <td style={{ display: 'none' }} ></td>
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
                                onClick={onSubmit1}
                                className="bg-gray-400 font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:font-extrabold hover:px-7 hover:bg-ffeba7 hover:text-white hover:border-gray-400"
                            />
                        </div>

                    </form>
                </section>
            </div>
        </div >
    );
}

export default BoletaForm;