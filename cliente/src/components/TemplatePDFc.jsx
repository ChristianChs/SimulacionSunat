import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { validaRUC } from '../api/validarDocs'
import { dataCuota } from '../api/login';

function TempletePDF(data) {
  const info=data.data
  const [resultado, setResultado] = useState("");
  const [datareceptor,setDataReceptor]=useState(null)
  const [datareceptor2,setDataReceptor2]=useState(null)
  const [datareceptor3,setDataReceptor3]=useState(null)
  const [datareceptor4,setDataReceptor4]=useState(null)
  const [dataReceptor5,setDataReceptor5]=useState(null)
  const [cuotas, setCuotas] = useState([]);
  const [datosTabla, setDatosTabla] = useState([]);

  const cargarCuotas = async () => {
    try {
      const response = await model.inCuota({ numCuota: '...', feCuota: '...', monCuota: '...' });
      if (response) {
        setCuotas([...cuotas, response]);
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const cargarDatosTabla = async () => {
    try {
      // Lógica para cargar los datos de la tabla desde la base de datos
      const response = await tuFuncionParaCargarDatosDeTabla(); // Ajusta esto con tu lógica real
      if (response) {
        setDatosTabla(response);
      }
    } catch (error) {
      console.error('Error al cargar datos de la tabla:', error);
    }
  };

  
  const getinfoRUCrs = async(ruc)=>{
    const data= await validaRUC(ruc)
    setDataReceptor(data.data.razonSocial)
  }
  getinfoRUCrs(info.ruc)

  const getinfoRUCrsd = async(ruc)=>{
    const data= await validaRUC(ruc)
    setDataReceptor3(data.data.razonSocial)
  }
  getinfoRUCrsd(info.nrodoc_destinatario)

  const getinfoRUCd = async(ruc)=>{
    const data= await validaRUC(ruc)
    setDataReceptor2(data.data.direccion)
  }
  getinfoRUCd(info.ruc)

  const getinfoRUCdd = async(ruc)=>{
    const data= await validaRUC(ruc)
    setDataReceptor4(data.data.direccion)
  }
  getinfoRUCdd(info.nrodoc_destinatario)

  const getinfoCuota = async()=>{
    const TablaCuota= await dataCuota()
    console.log(TablaCuota.data[0].numero_cuota)
    setDataReceptor5(TablaCuota)
  }
  useEffect(() => {
    cargarCuotas(); // Llama a cargarCuotas al cargar el componente
  }, []);

  useEffect(() => {
    cargarDatosTabla();
  }, []);
  
  
    function numeroAtexto(numero) {
      const unidades = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"];
      const decenas = ["", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
      const especiales = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
      const centenas = ["", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];

      if (numero >= 0 && numero < 10) {
        return unidades[numero];
      } else if (numero >= 10 && numero < 20) {
        return especiales[numero - 10];
      } else if (numero >= 20 && numero < 100) {
        const unidad = numero % 10;
        const decena = Math.floor(numero / 10);
        if (unidad === 0) {
          return decenas[decena];
        } else {
          return decenas[decena] + " Y " + unidades[unidad];
        }
      } else if (numero >= 100 && numero < 1000) {
        const centena = Math.floor(numero / 100);
        const resto = numero % 100;
        if (resto === 0) {
          return centenas[centena];
        } else {
          return centenas[centena] + " " + numeroAtexto(resto);
        }
      } else if (numero < 1000000) {
        const miles = Math.floor(numero / 1000);
        const resto = numero % 1000;
        if (resto === 0) {
          return numeroAtexto(miles) + " MIL";
        } else {
          return numeroAtexto(miles) + " MIL " + numeroAtexto(resto);
        }
      } else if (numero < 1000000000) {
        const millones = Math.floor(numero / 1000000);
        const resto = numero % 1000000;
        if (resto === 0) {
          return numeroAtexto(millones) + " MILLONES";
        } else {
          return numeroAtexto(millones) + " MILLONES " + numeroAtexto(resto);
        }
      } else {
        return "Número fuera de rango";
      }
    }

function convertirNumeroALetras(numeroInput) {
  if (!isNaN(numeroInput)) {
    const numero = parseInt(numeroInput);
    if (numero >= 0 && numero <= 999999999) {
      const texto = numeroAtexto(numero);
      setResultado(texto);
    } else {
      setResultado("El número debe estar entre 0 y 999,999,999.");
    }
  } else {
    setResultado("Por favor, ingrese un número válido.");
  }
}


useEffect(() => {
  convertirNumeroALetras(info.total_neto); 
  getinfoCuota()
}, []);

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>{datareceptor}</Text>
            <View style={styles.subtitle}>
              <Text>{datareceptor2}</Text>
              <Text>Teléfono: {info.dni} </Text>
            </View>
          </View>
          <View style={styles.recuadro}>
            <View style={styles.section}>
              <Text style={styles.value}>R. U. C. </Text>
              <Text style={styles.value}>{info.ruc}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.value}>RECIBO POR HONORARIOS ELECTRÓNICOS</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.value}>Nro. E001 - {info.id} </Text>
            </View>
          </View>

        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.section}>
            <Text style={styles.label}>Recibi de: </Text>
            <Text style={styles.value}>{datareceptor3}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Identificado con </Text>
            <Text style={styles.value}>RUC </Text>
            <Text style={styles.label}>número </Text>
            <Text style={styles.value}>{info.nrodoc_destinatario}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Domiciliado en </Text>
            <Text style={styles.value}>{datareceptor4}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Forma de pago: </Text>
            <Text style={styles.value}>AL CREDITO</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>La suma de: </Text>
            <Text style={styles.value}>{resultado}</Text>
            <Text style={styles.value}> Y 00/100 NUEVOS SOLES</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Por concepto </Text>
            <Text style={styles.value}>{info.descripcion_rxh} </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Observación </Text>
            <Text style={styles.value}>{info.obs_rxh}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Inciso </Text>
            <Text style={styles.value}>{info.inciso==='1'? "A":"B"} </Text>
            <Text style={styles.label}>DEL ARTÍCULO 33 DE LA LEY DEL IMPUESTO A LA RENTA</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Fecha de emisión </Text>
            <Text style={styles.value}>{info.fecha_emision}</Text>
          </View>

          <View style={styles.sectionMonto}>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Total por honorarios: </Text>
              <Text style={{ ...styles.label, textAlign: 'left', flex: 1 / 2 }}>{info.monto_total} </Text>
            </View>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Retención (8 %) IR: </Text>
              <Text style={{ ...styles.label, textAlign: 'left', flex: 1 / 2 }}>({info.retencion_monto})</Text>
            </View>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Total Neto Recibido: </Text>
              <Text id="numeroInput" style={{ ...styles.value, textAlign: 'left', flex: 1 / 2 }}> {info.total_neto} SOLES</Text>
            </View>
          </View>
          
          <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text>Número de Cuota</Text>
            </View>
            <View style={styles.cell}>
              <Text>Fecha de Vencimiento</Text>
            </View>
            <View style={styles.cell}>
              <Text>Monto de Cuota</Text>
            </View>
          </View>

          <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text>Cantidad</Text>
            </View>
            <View style={styles.cell}>
              <Text>Unidad Medida</Text>
            </View>
            <View style={styles.cell}>
              <Text>Descripción</Text>
            </View>
            <View style={styles.cell}>
              <Text>Valor Unitario</Text>
            </View>
            <View style={styles.cell}>
              <Text>ICBPER</Text>
            </View>
          </View>
          {datosTabla.map((fila, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.cell}>
                <Text>{fila.cantidad}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{fila.unidadMedida}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{fila.descripcion}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{fila.valorUnitario}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{fila.icbper}</Text>
              </View>
            </View>
          ))}
        </View>

          {cuotas.map((cuota, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.cell}>
                <Text>{cuota.numero_cuota}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{cuota.fecha_vencimiento}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{cuota.monto_cuota}</Text>
              </View>
            </View>
          ))}

        </View>

          <View style={styles.linea}></View>
        </View>
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  section: {
    flexDirection: 'row',
    fontSize: 8,
    marginBottom: 9
  },
  label: {
    fontFamily: 'Helvetica-Bold',
  },
  value: {
    color: '#707070',
    fontFamily: 'Helvetica'
  },
  sectionMonto: {
    marginTop: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold'
  },
  subtitle: {
    color: '#707070',
    marginBottom: 20,
    marginTop: 10,
    fontSize: 8
  },
  recuadro: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#42a8e6',
    borderWidth: 2,
    paddingTop: 9,
    width: 250,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  linea: {
    borderColor: '#42a8e6',
    borderBottomWidth: 1,
    marginTop: 10
  },
})

export default TempletePDF