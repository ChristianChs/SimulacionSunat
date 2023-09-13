import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { validaRUC } from '../api/validarDocs'


function TempletePDF(data) {
  const info=data.data
  const [resultado, setResultado] = useState("");
  const [datareceptor,setDataReceptor]=useState(null)
  const [datareceptor2,setDataReceptor2]=useState(null)
  const [datareceptor3,setDataReceptor3]=useState(null)
  const [datareceptor4,setDataReceptor4]=useState(null)
  
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
}, []);


const styles1 = StyleSheet.create({
  table: {
    display: 'table',
    width: 'auto',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCellWithBorder: {
    borderRight: '1pt solid #000',
    borderLeft: '1pt solid #000',
    borderBottom: '1pt solid #000',
    borderTop: '1pt solid #000',
    padding: 5,
    flexGrow: 1,
  },
  tableCell: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    flexGrow: 1,
  },
  text: {
    fontSize: 8,
    color: '#707070',
    fontFamily: 'Helvetica',
    justifyContent: 'center',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },

  text1: {
    fontSize: 8,
    color: '#707070',
    fontFamily: 'Helvetica-Bold',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  recuadro: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 2,
    paddingTop: 9,
    width: 570,
  },
});


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
            <Text style={styles.value}>AL CONTADO</Text>
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
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Retención (18 %) IR: </Text>
              <Text style={{ ...styles.label, textAlign: 'left', flex: 1 / 2 }}>({info.retencion_monto})</Text>
            </View>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Total Neto Recibido: </Text>
              <Text id="numeroInput" style={{ ...styles.value, textAlign: 'left', flex: 1 / 2 }}> {info.total_neto} SOLES</Text>
            </View>
          </View>

          <View style={styles1.recuadro}>
          <Text style={styles1.text1}>CUOTAS</Text>
            <View style={styles1.section}>
              <View style={styles1.table}>
                <View style={styles1.tableRow}>
                  <View style={styles1.tableCellWithBorder}>
                    <Text style={styles1.text1}>Columna 1</Text>
                  </View>
                  <View style={styles1.tableCellWithBorder}>
                    <Text style={styles1.text1}>Columna 2</Text>
                  </View>
                  <View style={styles1.tableCellWithBorder}>
                    <Text style={styles1.text1}>Columna 3</Text>
                  </View>
                </View>

                <View style={styles1.tableRow}>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 1</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 2</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 3</Text>
                  </View>
                </View>

                <View style={styles1.tableRow}>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 4</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 5</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 6</Text>
                  </View>
                </View>

                <View style={styles1.tableRow}>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 7</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 8</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 9</Text>
                  </View>
                </View>

                <View style={styles1.tableRow}>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 10</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 11</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 12</Text>
                  </View>
                </View>

                <View style={styles1.tableRow}>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 13</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 14</Text>
                  </View>
                  <View style={styles1.tableCell}>
                    <Text style={styles1.text}>Dato 15</Text>
                  </View>
                </View>

                {/* Puedes agregar más filas de datos aquí */}
              </View>
            </View>

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