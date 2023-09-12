import React, { useEffect, useState } from 'react'
import { validaRUC } from '../api/validarDocs'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

function TempleteXML(data) {
  const info=data.data
  const [datareceptor,setDataReceptor]=useState(null)
  const [datareceptor2,setDataReceptor2]=useState(null)
  const [datareceptor3,setDataReceptor3]=useState(null)
  const [datareceptor4,setDataReceptor4]=useState(null)
  const [datareceptor5,setDataReceptor5]=useState(null)
  
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
  

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={{ marginTop: 10 }}>
          <View style={styles.section}>
            <Text style={styles.label}>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>&lt;recibo_por_honorarios&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 20 }]}>&lt;emisor&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;nombre&gt;</Text>
            <Text style={styles.value}>{datareceptor}</Text>
            <Text style={styles.label}>&lt;/nombre&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;direccion&gt;</Text>
            <Text style={styles.value}>{datareceptor2}</Text>
            <Text style={styles.label}>&lt;/direccion&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;telefono&gt;</Text>
            <Text style={styles.value}>{datareceptor2}</Text>
            <Text style={styles.label}>&lt;/telefono&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;ruc&gt;</Text>
            <Text style={styles.value}>{info.ruc}</Text>
            <Text style={styles.label}>&lt;/ruc&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 20 }]}>&lt;/emisor&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 20 }]}>&lt;cliente&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;nombre&gt;</Text>
            <Text style={styles.value}>{datareceptor3}</Text>
            <Text style={styles.label}>&lt;/nombre&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;ruc&gt;</Text>
            <Text style={styles.value}>{info.nrodoc_destinatario}</Text>
            <Text style={styles.label}>&lt;/ruc&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;direccion&gt;</Text>
            <Text style={styles.value}>{datareceptor4}</Text>
            <Text style={styles.label}>&lt;/direccion&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 20 }]}>&lt;/cliente&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 20 }]}>&lt;transaccion&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;forma_de_pago&gt;</Text>
            <Text style={styles.value}>AL CONTADO</Text>
            <Text style={styles.label}>&lt;/forma_de_pago&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;monto_total&gt;</Text>
            <Text style={styles.value}>MIL DOSCIENTOS Y 00/100 SOLES</Text>
            <Text style={styles.label}>&lt;/monto_total&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;concepto&gt;</Text>
            <Text style={styles.value}>{info.descripcion_rxh}</Text>
            <Text style={styles.label}>&lt;/concepto&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;observacion&gt;</Text>
            <Text style={styles.value}>{info.obs_rxh}</Text>
            <Text style={styles.label}>&lt;/observacion&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;tipo_de_inciso&gt;</Text>
            <Text style={styles.value}>{info.inciso==='1'? "A":"B"}</Text>
            <Text style={styles.label}>&lt;/tipo_de_inciso&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;fecha&gt;</Text>
            <Text style={styles.value}>{info.fecha_emision}</Text>
            <Text style={styles.label}>&lt;/fecha&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;retencion&gt;</Text>
            <Text style={styles.value}>{info.retencion_monto}</Text>
            <Text style={styles.label}>&lt;/retencion&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 40 }]}>&lt;total_neto&gt;</Text>
            <Text style={styles.value}>{info.total_neto}</Text>
            <Text style={styles.label}>&lt;/total_neto&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, { marginLeft: 20 }]}>&lt;/transaccion&gt;</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>&lt;/recibo_por_honorarios&gt;</Text>
          </View>

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

export default TempleteXML