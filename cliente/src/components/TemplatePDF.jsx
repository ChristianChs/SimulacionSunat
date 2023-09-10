import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

function TempletePDF() {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>CHOQUE SURCO CHRISTIAN ALVARO</Text>
            <View style={styles.subtitle}>
              <Text>MZA. 323 LOTE 20 ASC. EL TRIUNFO TACNA TACNA CIUDAD NUEVA</Text>
              <Text>Teléfono: -</Text>
            </View>
          </View>
          <View style={styles.recuadro}>
            <View style={styles.section}>
              <Text style={styles.value}>R. U. C. </Text>
              <Text style={styles.value}>10714602107</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.value}>RECIBO POR HONORARIOS ELECTRÓNICOS</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.value}>Nro. E001 - 17</Text>
            </View>
          </View>

        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.section}>
            <Text style={styles.label}>Recibi de: </Text>
            <Text style={styles.value}>IMPULSORES SOCIEDAD ANONIMA CERRADA - IMPULSORES S.A.C.</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Identificado con </Text>
            <Text style={styles.value}>RUC </Text>
            <Text style={styles.label}>número </Text>
            <Text style={styles.value}>20600445881</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Domiciliado en </Text>
            <Text style={styles.value}>MZA. D 4 LOTE 20 A. H. PASAJE 3AA HH</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Forma de pago: </Text>
            <Text style={styles.value}>AL CONTADO</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>La suma de: </Text>
            <Text style={styles.value}>UN MIL DOSCIENTOS Y 00/100 SOLES</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Por concepto </Text>
            <Text style={styles.value}>SERVICIO DE ASESORÍA EN INFORMATICA E IMPLEMENTACION</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Observación </Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Inciso </Text>
            <Text style={styles.value}>"A" </Text>
            <Text style={styles.label}>DEL ARTÍCULO 33 DE LA LEY DEL IMPUESTO A LA RENTA</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Fecha de emisión </Text>
            <Text style={styles.value}>07 de Junio de 2023</Text>
          </View>

          <View style={styles.sectionMonto}>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Total por honorarios: </Text>
              <Text style={{ ...styles.label, textAlign: 'left', flex: 1 / 2 }}> 1200.00</Text>
            </View>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Retención (8 %) IR: </Text>
              <Text style={{ ...styles.label, textAlign: 'left', flex: 1 / 2 }}> 0.00</Text>
            </View>
            <View style={{ ...styles.section, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.label, textAlign: 'right', flex: 1 / 2, marginRight: 5 }}>Total Neto Recibido: </Text>
              <Text style={{ ...styles.value, textAlign: 'left', flex: 1 / 2 }}> 1200.00 SOLES</Text>
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