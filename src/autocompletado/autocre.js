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
        porcentaje.value = (valorInput * 0.08).toFixed(2); // Redondear a 2 decimales
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





const fechaVencimientoInput = document.getElementById('fecha_vencimiento');
const agregarBtn = document.getElementById('agregar');
const cuotasTable = document.getElementById('cuotas');
const totalRow = cuotasTable.insertRow(-1);
const cuotas = [];

let a = 1;

function insertFila() {
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
    let col5 = newRow.insertCell(4);

    col1.innerHTML = "a";
    col2.innerHTML = "a";
    col3.innerHTML = a;
    a = a + 1;
    col4.innerHTML = fechaVencimiento;
    col5.innerHTML = montoCuota;

    var table = document.getElementById('cuotas');

    var rows = table.getElementsByTagName('tr');

    var suma = 0;

    for (var i = 1; i < rows.length - 1; i++) {
        var cell = rows[i].getElementsByTagName('td')[4];
        if (cell) {
            suma += parseFloat(cell.textContent || cell.innerText);
        }
    }

    document.getElementById('suma_tabla').textContent = suma;
}
