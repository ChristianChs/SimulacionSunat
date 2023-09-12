import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { validaRUC } from '../api/validarDocs'
import { dataLogFecha } from '../api/login';

function TempletePDF(data) {
  const info=data.data
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
  
  var fechaCadena = info.fecha_emision;
  var fecha = new Date(fechaCadena);
  

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
            <Text style={styles.value}>MIL DOSCIENTOS Y 00/100 SOLES</Text>
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
            <Text style={styles.value}>{fecha}</Text>
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
              <Text style={{ ...styles.value, textAlign: 'left', flex: 1 / 2 }}> {info.total_neto} SOLES</Text>
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