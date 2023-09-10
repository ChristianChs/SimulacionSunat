function autocontado() {
    const medioDePagoSelect = document.querySelector('select[aria-label="Medio de Pago"]');
    const tipoDeMonedaSelect = document.querySelector('select[aria-label="Tipo de Moneda"]');
    
    tipoDeMonedaSelect.value = '1';
    medioDePagoSelect.value = '1';

    document.getElementById('free').checked=true;
    document.getElementById('description').value='NOTICIERO DEL CONTADOR S.A.C.';
    document.getElementById('observation').value='-';
    document.getElementById('date_issue').value='2023-09-13';
    document.getElementById('date_expiration').value='2023-12-31';
    document.getElementById('not_inciso').checked=true;
    document.getElementById('retention_yes').checked=true;
    document.getElementById('payment_yes').checked=true;
    document.getElementById('monto_total').value=100;
    

    medioDePagoSelect.dispatchEvent(new Event('change'));
}

const input = document.getElementById('monto_total');
const casillero = document.getElementById('total_neto');
const porcentaje=document.getElementById('impuesto');


input.addEventListener('change', function() {
    const valorInput = input.value;
    if(document.getElementById('retencion_no').checked===true){
       casillero.value = valorInput;
    }
    else{
        porcentaje.value=valorInput*0.08;
        casillero.value = valorInput;
    }
});